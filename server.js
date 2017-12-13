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
    var newRow = {
        id: data.todoList.length,
        text: req.body.new_todo_item,
        isDone: false
    }

    data.todoList.push(newRow)
    res.send(newRow)
})

app.post('/submit_change', function (req, res) {
    var rowId = parseInt(req.body.id)

    var row = data.todoList.find(function(r) {
        return r.id === rowId
    })

    if (row) {
        row.isDone = req.body.isDone
    }
    res.send(row)

})



app.listen(process.env.PORT, process.env.IP, function () {
    console.log('Server listening on port ' + process.env.PORT)
})
