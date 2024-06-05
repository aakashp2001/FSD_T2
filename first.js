var express = require('express')
var app = express()

app.get('/',(req,res)=>{
    res.set('content-type','text/html')
    res.write('<h1>Hello World</h1>')
    res.send()
})

app.get('/about',(req,res)=>{
    res.set('content-type','text/html')
    res.write('<h1>Hello from home page</h1>')
    res.send()
})

app.listen(3121,()=>{
    console.log('Server is running on port 3121')
})