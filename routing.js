var express = require('express')
var app = express()

app.get('/user/:userID/test/:testID',(req,res)=>{
    res.send(req.params)
})

app.listen(3122,()=>{
    console.log('Server is running on port 3122')
})