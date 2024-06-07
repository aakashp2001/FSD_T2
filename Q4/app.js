/*
    Write express js script to perform following tasks.
    1. Create one html file which contains one text field for name, email field and checkbox for subscription. 
    Html file will be loaded on home page. Email and name fields are required fields.
    2. On login page welcome user and email id data should be printed.
    a. If user checked the subscription then “Thank you for the subscription” message will be printed 
    and “logout” link will be displayed under the message. If user clicks logout link then he/she will 
    be redirected to the home page.
    b. If user has not opted for the subscription then “You can subscribe to get daily updates” message 
    will be printed and “subscribe” link will be displayed under the message. If user clicks subscribe 
    link then he/she will be redirected to the subscription page. In this page “Thank you for the 
    subscription” message will be printed and “logout” link will be displayed under the message. If 
    user clicks logout link then he/she will be redirected to the home page.
    Use concept of the middleware and you can use any of http methods(get/post). 
*/

var express = require('express')

var app = express()

app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/logins', (req, res, next) => {
    res.set('content-type','text/html')
    res.write(`Welcome ${req.body.name}, and your email id is: ${req.body.email}`)
    next()
    }
    , (req, res) => {
        if (req.body.subs) {
            res.write('<br>Thank you for the subscription')
            res.write('<br><a href="/">Logout</a>')
        }
        else {
            res.write('<br>You can subscribe to get daily updates')
            res.write('<br><a href="/subscribe">Subscribe</a>')
            res.write('<br><a href="/">Logout</a>')
        }
        console.log(req.body.subs)
        res.send()
    })

app.get('/subscribe', (req, res) => {
    res.set('content-type','text/html')
    res.write('<br>Thank you for the subscription')
    res.write('<br><a href="/">Logout</a>')
    res.send()
})

app.listen(3022, () => {
    console.log('http://localhost:3022');
})

