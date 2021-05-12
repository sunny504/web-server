const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname);
// console.log(__filename);

const app = express()

//define paths for Express config
const publicUrlPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')


//Setup handlers engine and views locations
app.set('view engine','hbs')
app.set('views','templates')
hbs.registerPartials(partialPath)
//setup static directory to server
app.use(express.static(publicUrlPath))

// app.get('',(req,res) =>{
//     res.send("<h1>Hello Sunny</h1>")
// })

app.get('',(req,res) =>{
    res.render('index',{
        'name':'sunny',
        'location':'vzm'
    }) 
})

app.get('/about',(req,res) =>{
    res.render('about') 
})

app.get('/help',(req,res) =>{
    res.send({
        'name':'sunny',
        'age':30
    })
})

app.get('*',(req,res) =>{
    res.send('404 Page not found')
})

app.get('/help/*',(req,res) =>{
    res.send("help status not found")
})

// app.get('/about',(req,res) =>{
//     res.send([{ 
//     'name':'Mani',
//     'age':29},{
//     'name':'sunny',
//     'age':30
// }])
// })

app.get('/weather',(req,res) =>{
    res.send([{'forcast':'29.3','location':'vizag'},{'forcast':'31.3','location':'vzm'}])
})

app.listen(3000,()=>{
    console.log("server is up on port 3000");
    
})