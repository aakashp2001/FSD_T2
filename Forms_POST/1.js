const express = require('express')
const path = require('path')

var app = express()


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.use(express.urlencoded({extended:false}))

app.post('/process_post',(req,res)=>{
    response = {
        fname: req.body.fn,
        lname: req.body.ln
    }
    res.send(response)
})


app.listen(3007)