// wrtie an express js script to configure the multer and perform the following tasks.
// 1. Create a pug file named file.pug. This file contains heading, H3, 'Upload your CV' in red color and a form of input type file and a submit button.
// 2. Create a file named file.js and link this file and pug file to browse on home page.
// 3. After uploading a file, display a message 'Upload page as 'file.ext' has been uploaded
// 4. Save uploaded files to specific directory named upload. In this folder, file must be stored in format of 'LJU-file.pdf where LJU is the field name'

var express = require('express')
var multer = require('multer')

var app = express()
app.use(express.urlencoded({extended:false}))
var storage = multer.diskStorage({
    destination:'upload',
    filename:(req,file,cb)=>{
        cb(null,'LJU-file.pdf')
    }
})

var upload = multer({storage:storage})

app.set('view engine','pug')

app.get('/',(req,res)=>{
    res.render(__dirname+'/file')
})

app.post('/upload',upload.single('file'),function(req,res){
    res.set('content-type','text/html')
    const file = req.file
    res.send(file.filename + ' has been uploaded')
})

app.listen(3002)