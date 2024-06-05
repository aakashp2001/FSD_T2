//   Write express js script to request server to display json onject values on browser


var express = require('express')

var app = express()
student = { name: 'grAve', age: 28 }

app.get('/',(req,res)=>{
    res.send(`${student.name} and ${student.age}`)
}).listen(3251,()=>{
    console.log("http://localhost:3251")
})

// Write express js script to request server to display json object(array of objects) in table form on browser

obj ={data: [{
    name:'Aakash',
    id: 101
},{
    name:'Om',
    id: 102
},{
    name:'Dev',
    id: 103
},{
    name:'Mahir',
    id: 104
},{
    name:'Rahul',
    id: 105
}]}

app.get('/',(req,res)=>{
    res.write( `<table><tr><td><h1>${Object.keys(obj.data[0])[0]}</h1></td><td><h1>${Object.keys(obj.data[0])[1]}</h1></td></tr>`)
    for (i of obj.data){
        res.write(`<tr><td>${i[Object.keys(obj.data[0])[0]]}</td><td>${i[Object.keys(obj.data[0])[1]]}</td></tr>`)
    }
    res.send()
}).listen(3216,()=>{
    console.log("http://localhost:3216")
})


// Write an express js script to define 1 json array of 3 objects having properties name and age. Sort this objects according to age. If user requests sorted name in url then all names along with age should be printed according to decending order of age and also display the sorted values on sort page and display object on home page

studenting = [{name:'Aakashs',
age: 23
},{
name:'Oms',
age: 20
},{
name:'Devs',
age: 21
}]
var apps = express()
apps.get('/',(req,res)=>{
    res.send(studenting)
})

apps.get('/sort',(req,res)=>{
    for (i=0;i<studenting.length;i++){
        for(j=i+1;j<studenting.length;j++){
            if(studenting[j].age>studenting[i].age){
                var temp = studenting[i]
                studenting[i] = studenting[j]
                studenting[j] = temp
            }
        }
    }
    res.write( `<table><tr><td><h1>${Object.keys(studenting[0])[0]}</h1></td><td><h1>${Object.keys(studenting[0])[1]}</h1></td></tr>`)
    for (i of studenting){
        res.write(`<tr><td>${i[Object.keys(studenting[0])[0]]}</td><td>${i[Object.keys(studenting[0])[1]]}</td></tr>`)
    }
    res.send()
})

apps.listen(3225,()=>{
    console.log('http://localhost:3225')
})