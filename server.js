const express = require('express')
const app = express()


app.set('view engine', 'pug')

app.get('/', function (req, res) {
  let data = {
    title: 'ToDo',
    todoList: [
        { text: 'Piim', isDone: false },
        { text: 'Sai', isDone: true },
        { text: 'Või', isDone: false }
    ]
  }

  res.render('index', data)
})

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Server listening on port ' + process.env.PORT)
})
