// Write an express js script to pass data like object message, name, id from express application to pug tempelate in h1,h2 and h3 tag resp. and display them on browser


var express = require('express')
var app = express()

app.set('view engine','pug')
app.get('/',(req,res)=>{
    res.render(__dirname+'/1',{message:'Hello',name:'abc',id:2})
})

app.listen(3002)