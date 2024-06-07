var cp = require('cookie-parser')
var express = require('express')
var app = express()

app.use(cp())

app.get('/cookie',(req,res)=>{
    res.cookie('name','ExpressJS')
    res.cookie('fname','Express')
    res.cookie('lname','js')
    res.cookie('ID','2',{
        expires: new Date(Date.now()+10000)
    })
    res.clearCookie('lname')
    const cookies = req.cookies
    res.send(cookies)
})

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})

