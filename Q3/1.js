
// write an express js script to perform a task:
// create 1 html file named lj form.html and add an form which contains username password and submit button.
// 1. data should be submitted by post only
// 2. submit button is of black color bg and white text(external css)
// 3. On home page form should be displayed and while submmiting the form, on the next page, named login, if username is admin, then it will display a message 'Welcome ADMIN' in h1
// green, else it should display 'Please login with admin name' in red h1.

var express = require('express')
var path = require('path')

var app = express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/lj_form.html')
})
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:false}))

app.post('/gateway',(req,res)=>{
    console.log(req.body.uname)
    if(req.body.uname=='admin'){
        res.write(`<h1 style="color:green">Hello ${req.body.uname}</h1>`)
    }
    else{
        res.write(`<h1 style="color:red">Please login with admin name</h1>`)
    }
    res.send()
})

app.listen(3029,()=>{
    console.log('http://localhost:3029')
})