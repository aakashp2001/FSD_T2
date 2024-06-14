var express = require('express')
var app = express()

app.set('view engine','pug')
app.get('/',(req,res)=>{
    res.render(__dirname+'/1')
})

app.listen(3002)