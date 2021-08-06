const express = require('express')
const { Challenge, User, Comment } = require('../models')
const { isLoggedIn } = require('./middlewares')

const router = express.Router()

/**
 * @swagger
 *  /challenge:
 *    get:
 *      tags:
 *        - challenge
 *      description: 챌린지 목록 가져오기
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
 *                  img_addr:
 *                    type: string
 *                  content:
 *                    type: text
 *                  start_date:
 *                    type: date
 *                  period:
 *                    type: integer
 *                  repeat_cycle:
 *                    type: integer
 *                  auth_count:
 *                    type: integer
 *                  UserId:
 *                    type: integer
 *                  User:
 *                    type: array
 *                    description: 어떤 형태로 들어올지 모르겠다.
 *                  Comments:
 *                    type: array
 *                    description: 어떤 형태로 들어올지 모르겠다.
 * 
 */
router.get('/', async (req, res, next) => { // GET /challenge
  try {
    const where = {}
    const challenges = await Challenge.findAll({
      where,
      limit: 10,
      order: [
        ['createdAt', 'DESC']
      ],
      include: [{
        model: User,
        attributes: ['id', 'nickname']
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname']
        }]
      }]
    })
    res.status(200).json(challenges)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

/**
 * @swagger
 *  /challenge:
 *    post:
 *      tags:
 *        - challenge
 *      description: 챌린지 생성하기
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
 *                  start_date:
 *                    type: date
 *                  period:
 *                    type: integer
 *                  repeat_cycle:
 *                    type: integer
 *                  auth_count:
 *                    type: integer
 *              example:
 *                id: 1
 *                name: '하루 10분 명상하기'
 *                content: '하루 10분 명상을 통해 내면의 평화를 찾아봅시다.'
 *                start_date: 2021-08-02
 *                period: 21
 *                repeat_cycle: 1
 *                auth_count: 1
 */
router.post('/', isLoggedIn, async (req, res, next) => { // POST /challenge
  try {
    console.log(req.user)
    const challenge = await Challenge.create({
      name: req.body.name,
      content: req.body.content,
      start_date: req.body.start_date,
      period: req.body.period,
      repeat_cycle: req.body.repeat_cycle,
      auth_count: req.body.auth_count,
      UserId: req.user.id,
    })
    const fullChallenge = await Challenge.findOne({
      where: { id: challenge.id },
      include: [{
        model: User, // 게시글 작성자
        attributes: ['id', 'nickname']
      }]
    })
    res.status(200).json(fullChallenge)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router