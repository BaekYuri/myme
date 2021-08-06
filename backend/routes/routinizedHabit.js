const express = require('express')
const { Routine, Habit, RoutinizedHabit, DailyAchieveHabit } = require('../models')
const { isLoggedIn } = require('./middlewares')

const router = express.Router()

// 루틴에 습관 등록하기
/**
 * @swagger
 *  /routinizedHabit/{routineId}:
 *    post:
 *      tags:
 *      - routinizedHabit
 *      description: 루틴에 습관 등록하기
 *      parameters:
 *        - in: path
 *          name: routineId
 *          required: true
 *          schema:
 *            type: integer
 *            minimum: 1
 *          description: 습관을 추가하려는 루틴의 Id
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                order:
 *                  type: integer
 *                achieve_count:
 *                  type: integer
 *                  description: 초기에 무조건 0으로 고정
 *                HabitId:
 *                  type: integer
 *      responses:
 *        '200':
 *          description: Success
 */
router.post('/:routineId', isLoggedIn, async (req, res, next) => {
  try {
    const routinizedHabit = await RoutinizedHabit.create({
      order: req.body.order,
      achieve_count: 0,
      RoutineId: req.params.routineId,
      HabitId: req.body.habitId
    })
    res.status(200).json(routinizedHabit)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

// 루틴 내 습관 순서 변경 후 저장
/**
 * @swagger
 *  /routinizedHabit/order:
 *    patch:
 *      tags:
 *        - routinizedHabit
 *      description: 루틴 내 습관 순서 변경 후 저장
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                routineId:
 *                  type: integer
 *                habits:
 *                  type: array
 *                  description: habitId, order 쌍의 배열
 *      responses:
 *        '200':
 *          description: Success
 */
router.patch('/order', isLoggedIn, async (req, res, next) => {
  try {
    const routinizedHabits = await RoutinizedHabit.findAll({
      where: { RoutineId: req.body.routineId },
    })
    // 이게 맞나 싶다...
    routinizedHabits.map(async (routinizedHabit) => {
      for(let i=0; i<routinizedHabits.length; i++) {
        if (routinizedHabit.id === req.body.habits[i].habitId) {
          await RoutinizedHabit.update({
            order: req.body.habits[i].order,
            where: { id: routinizedHabit.id }
          })
        }
      }
    })
    res.status(200).json(routinizedHabits)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

// 루틴 내 습관 실행 완료 체크하기
/**
 * @swagger
 *  /routinizedHabit/:
 *    post:
 *      tags:
 *      - routinizedHabit
 *      description: 루틴 내 습관 실행 완료 체크하기
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                routineId:
 *                  type: integer
 *                habitId:
 *                  type: integer
 *      responses:
 *        '200':
 *          description: Success
 */
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const routinizedHabit = await RoutinizedHabit.findOne({
      where: { RoutineId: req.body.routineId, HabitId: req.body.habitId }
    })
    const dailyAchieveHabit = await DailyAchieveHabit.create({
      authorized: true,
      RoutinizedHabitId: routinizedHabit.id
    })
    res.status(200).json(dailyAchieveHabit)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router