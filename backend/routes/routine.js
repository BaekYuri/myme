const express = require('express')
const { Routine, User, RoutinizedHabit, RoutineActiveDay } = require('../models')
const { isLoggedIn } = require('./middlewares')

const router = express.Router()

// 내 루틴 목록 가져오기
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

// 내 루틴 생성하기
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
 *                day_of_week:
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
    req.body.day_of_week.map(async (v, i) => {
      await RoutineActiveDay.create({
        RoutineId: routine.id,
        active_day_of_week: v.day,
        start_time: v.time
      })
    })
    const fullRoutine = await Routine.findOne({
      where: { id: routine.id },
      include: [{
        model: User,
        attributes: ['id', 'nickname']
      }, {
        model: RoutinizedHabit,
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

module.exports = router