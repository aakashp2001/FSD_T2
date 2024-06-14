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


/*
You have been assigned to develop a user feedback form for a website using Express.js and
cookies.
Implement the following requirements:
• Create a form with the following fields:
o Name (input field)
o Email (input field)
o Message (textarea field)
o Rating (radio buttons: Bad, Average, Good, Very Good, Excellent)
• When the user submits the form, store their feedback information (name, email,
message, and rating) in a cookie named "feedback" that expires in 10 seconds.
• Display a confirmation message to the user after successfully submitting the form &
Create a link to display the feedback details stored in the "feedback" cookie.
• When the user click to the link, retrieve the feedback information from the cookie and
display it on the page also include a link on the feedback details page to Logout.
• When the user clicks the link, user redirected to home page.

*/