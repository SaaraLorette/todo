const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/test', function (req, res) {
  res.send('Test!')
})

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Server listening on port ' + process.env.PORT)
})

console.log('Lõpp')
