const express = require('express')
const path = require('path')

var app = express()

sp = path.join(__dirname,'../Frontend')

app.use(express.static(sp,{index:'1.html'}))
app.listen('3002',()=>{
    console.log('Server is running on http://localhost:3002')
})