// Write an express js script to set cookies of submitted values of form. Perform the following tasks.
// 1. Create an html file which contains a form with fields firstName, lastName, and password.
// 2. Once these names are submitted, store all these entered values to respective cookies on next page.
// 3. Then, redirect user to admin page and clear the cookie set for the last name. Display remaining set cookie values on this page 
// using post method only

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
