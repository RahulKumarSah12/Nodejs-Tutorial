const express = require("express");
const app = express();
const fs = require("fs");
const users = require("./myfile/MOCK_DATA.json");

app.use(express.urlencoded({extended:false}));

app.post("/user",(req,res)=>{
    const user = req.body;
    users.push({id:users.length+1,...user});
    fs.writeFile("./myfile/MOCK_DATA.json",JSON.stringify(users),()=>{
        res.end("User Created");
    })
})

app.listen(4200,()=>{
    console.log("Server Started");
})