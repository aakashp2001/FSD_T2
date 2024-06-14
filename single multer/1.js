const multer = require('multer')
var express = require('express')
var app = express()
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

var store = multer.diskStorage({
    destination:'pics',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

var upload = multer({storage:store})

app.post('/uploadFile', upload.single('mypic'),(req,res)=>{
    const file = req.file
    if(file){
        res.send('<h1>File <span style="color:blue">'+file.originalname+'</span> has been uploaded in <span style = "color:red">'+file.destination+'</span> folder')
    }
})

app.listen(3002)