const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.urlencoded({extended:false}));

app.post("/new_user",(req,res)=>{
    const user = req.body;
    console.log(user);
    // if(Object.keys(user).length === 0){
    //     res.status(400).send({"msg":"Send a valid user"});
    // }
    if(!user || !user.user_name){
        res.status(400).send({msg:"Send a valid user"});
    }
    fs.appendFile("./myfile/7test.txt",`${JSON.stringify(user)}\n`,()=>{
        res.status(201).send({msg:"User Successfully Created"});
    })
    console.log(req.headers);
})

app.listen(4200,()=>{
    console.log("Server Started");
})