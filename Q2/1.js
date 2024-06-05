var express = require('express')
var path = require('path')

var app = express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Q.html')
})

app.get('/result',(req,res)=>{
    if(req.query.options=='mul'){
        res.write((req.query.num1 * req.query.num2).toString())
    }
    else if(req.query.options=='add'){
        res.write((req.query.num1 + req.query.num2).toString())
    }
    else if(req.query.options=='sub'){
        res.write((req.query.num1 - req.query.num2).toString())
    }
    else if(req.query.options=='div'){
        res.write((req.query.num1 / req.query.num2).toString())
    }
    else{
        res.write('select some options and inut all values')
    }
    res.send()
})

app.listen(3025,()=>{
    console.log('http://localhost:3025')
})

