const express = require('express')
const path = require('path')

var app = express()

sp = path.join(__dirname)

app.use(express.static(__dirname,{index:'1.html'}))
app.listen('3003',()=>{
    console.log('Server is running on http://localhost:3003')
})