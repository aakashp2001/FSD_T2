//- Write an express js script to load a student form using pug file which contains:
//- 1. Name
//- 2. Email 
//- 3. course (radio) - CE,IT, CSE, AIML
//- Once form is submitted, data should be displayed on data page using pug file in table form

var express = require('express')

var app = express()

app.set('view engine','pug')

app.get('/',(req,res)=>{
    res.render(__dirname+'/1')
})

app.get('/data',(req,res)=>{
    data = req.query
    res.render(__dirname+'/data',{name:data.Name,email:data.Email,course:data.course})
})

app.listen(3002)