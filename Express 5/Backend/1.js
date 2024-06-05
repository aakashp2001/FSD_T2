const express = require('express')
const path = require('path')

var app = express()

var sp = path.join(__dirname,'../Frontend')
var sp1 = path.join(__dirname,'../Fr')

app.use(express.static(sp1))
app.use(express.static(sp,{index:'1.html'}))

app.listen('3006',()=>{
    console.log('Server is running on http://localhost:3006')
})