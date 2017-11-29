const express = require('express')
const bodyParser = require('body-parser')



const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



let data = {
    title: 'ToDo',
    todoList: []
}

app.get('/', function (req, res) {
    res.render('index', data)
})

app.post('/submit_new', function (req, res) {
    data.todoList.push({
        text: req.body.new_todo_item,
        isDone: false
    })
    res.send({ item: req.body.new_todo_item })
})



app.listen(process.env.PORT, process.env.IP, function () {
    console.log('Server listening on port ' + process.env.PORT)
})
