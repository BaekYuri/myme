const express = require('express')
const { ChallengeParticipation, User, DailyAchieveChallenge, Challenge } = require('../models')
const { isLoggedIn } = require('./middlewares')

const router = express.Router()

/**
 * @swagger
 *  /challengeParticipation:
 *    get:
 *      tags:
 *        - challengeParticipation
 *      description: 내가 참여하고 있는 챌린지 목록 가져오기
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
 *                  achieve_count:
 *                    type: integer
 *                  UserId:
 *                    type: integer
 *                    description: 챌린지에 참여하고 있는 사용자의 Id
 *                  ChallengeId:
 *                    type: integer
 */
 router.get('/', isLoggedIn, async (req, res, next) => { // GET /challengeParticipation
  try {
    const challengeParticipation = await ChallengeParticipation.findAll({
      where: { UserId: req.user.id },
      include: [{
        model: Challenge,
      }]
    })
    res.status(200).json(challengeParticipation)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

/**
 * @swagger
 *  /challengeParticipation:
 *    post:
 *      tags:
 *        - challengeParticipation
 *      description: 챌린지 참여하기
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                achieve_count:
 *                  type: integer
 *                UserId:
 *                  type: integer
 *                ChallengeId:
 *                  type: integer
 *      responses:
 *        '200':
 *          description: Success
 */
router.post('/', isLoggedIn, async (req, res, next) => { // POST /challengeParticipation
  try {
    const challengeParticipation = await ChallengeParticipation.create({
      period: req.body.period,
      achieve_count: req.body.achieve_count,
      UserId: req.user.id,
      ChallengeId: req.body.challengeId
    })
    await challengeParticipation.findOne({
      where: { id: challengeParticipation.id },
      include: [{
        model: User,
        attributes: ['id', 'nickname']
      }]
    })
    res.status(200).json(challengeParticipation)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

/**
 * @swagger
 *  /challengeParticipation/{challengeId}:
 *    post:
 *      tags:
 *        - challengeParticipation
 *      description: 챌린지 인증하기
 *      parameters:
 *        - in: path
 *          name: challengeId
 *          required: true
 *          schema:
 *            type: integer
 *            minimum: 1
 *          description: 인증하려는 챌린지의 Id
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                img_addr:
 *                  type: string
 *                content:
 *                  type: string
 *      responses:
 *        '200':
 *          description: Success
 */
router.post('/:challengeId', isLoggedIn, async (req, res, next) => {  // POST /challengeParticipation/1
  try {
    const challengeParticipation = await ChallengeParticipation.findOne({
      where: { UserId: req.user.id, ChallengeId: req.params.challengeId }
    })
    const dailyAchieveChallenge = await DailyAchieveChallenge.create({
      img_addr: req.body.img_addr,
      content: req.body.content,
      ChallengeParticipationId: challengeParticipation.id
    })
    res.status(200).json(dailyAchieveChallenge)
  } catch (error) {
    console.error(error)
    next(error)
  }
})



module.exports = router