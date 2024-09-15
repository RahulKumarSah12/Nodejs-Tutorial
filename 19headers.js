const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.setHeader("myName","Rahul");
    res.send("Home Page");
    console.log(req.headers);
})

app.get("/about",(req,res)=>{
    res.setHeader("myName","Rohit");
    res.send("About Page");
    console.log(req.headers);
})

app.listen(4500,()=>{
    console.log({"msg":"Server Started"});
})