const express = require('express')
const path = require('path')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use((req, res, next) => {
  console.log('모든 요청에 실행하고 싶어요!')
  next() // 다음 미들웨어를 실행하기 위해서 필요하다!
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/', (req, res) => {
  res.send('hello MYME')
})

app.get('/about', (req, res) => {
  res.send('hello MYME')
})

app.use((req, res, next) => {
  res.status(200).send('404')
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(200).send('에러 발생!')
})

app.listen(app.get('port'), () => {
  console.log('익스프레스 서버 실행')
})