const multer = require('multer')
var express = require('express')
var app = express()
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

var store = multer.diskStorage({
    destination:'picsMulti',
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now()+'.jpg')
    }
})

var upload = multer({storage:store})

app.post('/uploadFile', upload.array('mypic',5),(req,res)=>{
    res.set('content-type','text/html')
    const file = req.files
    for (i of file){
        res.write('<h1>File <span style="color:blue">'+i.originalname+'</span> has been uploaded in <span style = "color:red">'+i.destination+'</span> folder')
    }
    res.send()
})

app.listen(3002)