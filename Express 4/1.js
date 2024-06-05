const express = require('express')
const path = require('path')

var app = express()
console.log((__dirname,'./Frontend'))

app.use(express.static((__dirname,'./Frontend'),{index:'1.html'}))
app.listen('3005',()=>{
    console.log('Server is running on http://localhost:3005')
})