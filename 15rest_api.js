const express = require("express");
const app = express();
const users = require("./myfile/MOCK_DATA.json");

app.get("/users",(req,res)=>{
    res.send(users);
})

// app.get("/users/:id",(req,res)=>{
//     const myId = Number(req.params.id);
//     console.log(myId);
//     const user = users.find((user)=>user.id==myId);
//     res.send(user.first_name);
// })

app.get("/users/:name",(req,res)=>{
    const myName = (req.params.name);
    console.log(myName);
    const user = users.find((user)=>user.first_name==myName);
    if(user){
        res.send(user);
    }
    else{
        res.send({msg : "User Not Found"});
    }
})

app.listen(6700,()=>{
    console.log("Server Started!");
})