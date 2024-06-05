var express = require('express')

var app = express()
student = { name: 'Aakash', age: 28 }
app.get('/', function (req, res) {
    res.write(JSON.stringify(student))
    res.send()
}).listen(3122)

app.get('/', function (req, res) {
    res.write()
    res.send(student)
}).listen(3123)

app.get('/', function (req, res) {
    res.JSON(student)
}).listen(3124)

