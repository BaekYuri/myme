const express = require('express')
const bcrypt = require('bcrypt')
const { User } = require('../models')
const passport = require('passport')
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')

const router = express.Router()

// 새로고침시 유저 정보 유지
router.get('/', async (req, res, next) => { // GET /user
  try {
    if (req.user) {
      const user = await User.findOne({
        where: { id: req.user.id }
      })
      res.status(200).json(user)
    } else {
      res.status(200).json(null)
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})

/**
 * @swagger
 *  /user/join:
 *    post:
 *      tags:
 *        - user
 *      description: 회원 가입
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                nickname:
 *                  type: string
 *                password:
 *                  type: string
 *                address:
 *                  type: string
 *      responses:
 *        '200':
 *          description: Success
 */
router.post('/join', isNotLoggedIn, async (req, res, next) => { // POST /user/join
  const {
    name,
    email,
    nickname,
    password,
    gender,
    age,
    address,
    phone_number
  } = req.body

  try {
    const exUser = await User.findOne({ where: {email: email} })
    if (exUser) {
      return res.redirect('/join?error=exist')
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    await User.create({
      name,
      email,
      nickname,
      password: hashedPassword,
      gender,
      age,
      address,
      phone_number
    })
    return res.status(201).send('ok')
  } catch (error) {
    console.error(error)
    return next(error)
  }
})

/**
 * @swagger
 *  /user/login:
 *    post:
 *      tags:
 *        - user
 *      description: 사용자 로그인 요청
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                password:
 *                  type: string
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
 *                  email:
 *                    type: string
 *                  nickname:
 *                    type: string
 *                  gender:
 *                    type: string
 *                  phone_number:
 *                    type: string
 *              example:
 *                id: 1
 *                name: '백상욱'
 *                email: 'oogab@naver.com'
 *                nickname: 'wook'
 *                gender: '남'
 *                phone_number: '01032216063'
 *        '403':
 *          description: 로그인 실패, 존재하지 않는 유저
 */
router.post('/login', isNotLoggedIn, (req, res, next) => {  // POST /user/login
  passport.authenticate('local', (error, user, info) => {
    if (error) { // 서버 에러
      console.error(error)
      return next(error)
    }
    if (info) { // 클라이언트 에러
      return res.status(401).send(info.reason)
    }
    return req.login(user, async (loginError) => {
      if (loginError) {
        console.error(loginError)
        return next(loginError)
      }
      // 세션 쿠키를 브라우저로 보내준다!
      const fullUserWithoutPassword = await User.findOne({
        where: {
          id: user.id
        },
        attributes: {
          exclude: ['password']
        }
      })
      return res.status(200).json(fullUserWithoutPassword)
    })
  })(req, res, next) // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다!
})

/**
 * @swagger
 *  /user/logout:
 *    post:
 *      tags:
 *        - user
 *      description: 사용자 로그아웃 요청
 *      responses:
 *        '200':
 *          description: Success
 */
router.post('/logout', isLoggedIn, (req, res) => {
  req.logout()
  req.session.destroy()
  res.send('ok')
})

/**
 * @swagger
 *  /user/profile:
 *    patch:
 *      tags:
 *        - user
 *      description: 사용자 개인정보 변경
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                nickname:
 *                  type: string
 *                gender:
 *                  type: string
 *                age:
 *                  type: integer
 *                address:
 *                  type: string
 *                phone_number:
 *                  type: string
 *      responses:
 *        '200':
 *          description: Success
 */
router.patch('/profile', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.update({
      nickname: req.body.nickname,
      gender: req.body.gender,
      age: req.body.age,
      address: req.body.address,
      phone_number: req.body.phone_number
    }, {
      where: { id: req.user.id }
    })
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router
