const express = require('express')
const app = express()


app.set('view engine', 'pug')

app.get('/', function (req, res) {
  let data = {
    title: 'Hey',
    message: 'Hello there!'
  }
  res.render('index', data)
})

app.get('/test', function (req, res) {
  let data = {
    title: 'Test',
    message: 'Test!'
  }
  res.render('index', data)
})


app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Server listening on port ' + process.env.PORT)
})