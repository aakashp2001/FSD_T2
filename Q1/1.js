// Write an express js script to print a messahge in next line splitting by '.'
// Use get method to submit the data. HTML file contains form of text area for the message and submit button.
// Your HTML file is in frontend folder and js file is in backend folder.

var express = require('express')
var path = require('path')

var app = express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/process',(req,res)=>{
    var msg = req.query.txt.split('. ')
    for(var i=0;i<msg.length;i++){
        res.write(msg[i]+'\n')
    }
    res.send()
})

app.listen(3009)