var express = require('express')
var app = express()

app.set('view engine','pug')

app.get('/',(req,res)=>{
    res.render(__dirname+'/pug')
})

app.get('/data',(req,res)=>{
    res.send(req.query)
})

app.listen(3002)
