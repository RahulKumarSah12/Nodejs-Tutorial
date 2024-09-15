const http = require("http");
const express = require("express");
const app = express();

app.get('/', (req,res)=>{
    res.end("Home Page");
})

app.post('/', (req,res)=>{
    res.end(`Hey ${req.query.name} please fill this form`);
})

app.get('/about',(req,res)=>{
    res.end(`Hey ${req.query.name}, welcome to About Page`);
})

app.listen(4600,()=>{
    console.log("Server Started!");
})
