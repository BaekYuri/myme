const express = require('express')
const { User, Habit } = require('../models')
const { isLoggedIn } = require('./middlewares')

const router = express.Router()

// 내 습관 목록 불러오기
/**
 * @swagger
 *  /habit:
 *    get:
 *      tags:
 *        - habit
 *      description: 내 습관 목록 불러오기
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
 *                  content:
 *                    type: text
 *                  time_required:
 *                    type: integer
 *                  UserId:
 *                    type: integer
 *              example:
 *                id: 1
 *                name: 이불 개기
 *                content: 이불 개기
 *                time_required: 10
 *                UserId: 1
 */
router.get('/', isLoggedIn, async (req, res, next) => { // GET /habit
  try {
    const habits = await Habit.findAll({
      where: { UserId: req.user.id }
    })
    res.status(200).json(habits)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

// 습관 만들기
/**
 * @swagger
 *  /habit:
 *    post:
 *      tags:
 *        - habit
 *      description: 내 습관 항목 만들기
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                name:
 *                  type: string
 *                content:
 *                  type: text
 *                time_required:
 *                  type: integer
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
 *                  content:
 *                    type: text
 *                  time_required:
 *                    type: integer
 *                  UserId:
 *                    type: integer
 *              example:
 *                id: 1
 *                name: 이불 개기
 *                content: 이불 개기
 *                time_required: 10
 *                UserId: 1
 */
router.post('/', isLoggedIn, async (req, res, next) => { // POST /habit
  try {
    const habit = await Habit.create({
      name: req.body.name,
      content: req.body.content,
      time_required: req.body.time_required,
      UserId: req.user.id
    })
    res.status(200).json(habit)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router