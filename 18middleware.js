const express = require("express");
const app = express();
const fs = require("fs");

app.use((req,res,next)=>{
    console.log(req.path);
    console.log("Middleware1");

    req.myName = "Rahul";

    next();
})

app.use((req,res,next)=>{
    console.log("Middleware2");
    console.log(req.myName);
    fs.appendFile("./myfile/6text.txt",`${Date.now()} : ${req.path} : ${req.method} : ${req.myName}\n`,()=>{
        res.send({msg : "Middleware2"});
    })
})

app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.get("/about",(req,res)=>{
    res.send("About Page");
})

app.listen(4500,()=>{console.log("Server Started")});