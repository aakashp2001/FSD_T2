const express = require('express')
const path = require('path')

var app = express()


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/process_get',(req,res)=>{
    response = {
        fname: req.query.fn,
        lname: req.query.ln
    }
    res.send(response)
})


app.listen(3007)