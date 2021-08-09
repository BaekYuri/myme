const express = require('express')
const { Routine, User, RoutinizedHabit, RoutineActiveDay, Habit } = require('../models')
const { isLoggedIn } = require('./middlewares')

const router = express.Router()

// 루틴 목록 가져오기
/**
 * @swagger
 *  /routine:
 *    get:
 *      tags:
 *        - routine
 *      description: 내 루틴 목록 가져오기
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                  name:
 *                    type: string
 *                  alarm:
 *                    type: bool
 *                  UserId:
 *                    type: integer
 */
router.get('/', isLoggedIn, async (req, res, next) => { // GET /routine
  try {
    const routines = await Routine.findAll({
      where: { UserId: req.user.id },
      include: [{
        model: User,
        attributes: ['id', 'nickname']
      }, {
        model: RoutinizedHabit,
        include: [{
          model: Habit,
          attributes: ['name']
        }]
      }, {
        model: RoutineActiveDay
      }]
    })
    // console.log(routines)
    res.status(200).json(routines)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

// 루틴 생성하기
/**
 * @swagger
 *  /routine:
 *    post:
 *      tags:
 *        - routine
 *      description: 새로운 루틴 생성하기
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                alarm:
 *                  type: string
 *                active_day_of_week:
 *                  type: array
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                  name:
 *                    type: string
 *                  alarm:
 *                    type: bool
 *                  UserId:
 *                    type: integer
 *                  RoutineActiveDay:
 *                    type: array
 */
router.post('/', isLoggedIn, async (req, res, next) => { // POST /routine
  try {
    const routine = await Routine.create({
      name: req.body.name,
      alarm: req.body.alarm,
      UserId: req.user.id,
    })
    for(let i=0;i<req.body.active_day_of_week.length;i++){
      let v = req.body.active_day_of_week[i]
      await RoutineActiveDay.create({
        RoutineId: routine.id,
        day_of_week: i,
        start_time: v.start_time,
        active: v.active,
      })
    }
    const fullRoutine = await Routine.findOne({
      where: {id: routine.id},
      include: [{
        model: User,
        attributes: ['id', 'nickname']
      }, {
        model: RoutineActiveDay
      }]
    })
    res.status(200).json(fullRoutine)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

// 루틴 설정 수정하기
/**
 * @swagger
 *  /routine:
 *    patch:
 *      tags:
 *        - routine
 *      description: 루틴 설정 수정하기
 *      parameters:
 *        - in: path
 *          name: routineId
 *          required: true
 *          schema:
 *            type: integer
 *            minimum: 1
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                alarm:
 *                  type: string
 *                active_day_of_week:
 *                  type: array
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                  name:
 *                    type: string
 *                  alarm:
 *                    type: bool
 *                  UserId:
 *                    type: integer
 *                  RoutineActiveDay:
 *                    type: array
 */
router.put('/:routineId', isLoggedIn, async (req, res, next) => { // PATCH /routine/:routineId
  try {
    await Routine.update({
      name: req.body.name,
      alarm: req.body.alarm,
    },{
      where: { id: req.params.routineId },
    })
    for(let i=0;i<req.body.active_day_of_week.length;i++){
      let v = req.body.active_day_of_week[i]
      await RoutineActiveDay.update({
        start_time: v.start_time,
        active: v.active,
      }, {
        where: { RoutineId: req.params.routineId, day_of_week: i }
      })
    }
    const routine = await Routine.findOne({
      where: {id: req.params.routineId},
      include: [{
        model: User,
        attributes: ['id', 'nickname']
      }, {
        model: RoutinizedHabit,
      }, {
        model: RoutineActiveDay
      }]
    })
    res.status(200).json(routine)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

// 루틴 삭제하기
/**
 * @swagger
 *  /routine/{routineId}:
 *    delete:
 *      tags:
 *        - routine
 *      description: 루틴 삭제하기
 *      parameters:
 *        - in: path
 *          name: routineId
 *          required: true
 *          schema:
 *            type: integer
 *            minimum: 1
 *      responses:
 *        '200':
 *          description: Success
 */
router.delete('/:routineId', isLoggedIn, async (req, res, next) => {
  try {
    await Routine.destroy({
      where: { id: req.params.routineId }
    })
    res.status(200).json('Success')
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router