const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Connection 
mongoose
    .connect("mongodb://127.0.0.1:27017/rahul-users")
    .then(()=>{console.log("Mongoose Connected")})
    .catch((err)=>{console.log("Error",err)});


//Schema
const userSchema = new mongoose.Schema({
    user_name : {
        type : String,
        required : true
    },
    user_age : {
        type : Number
    },
    user_college : {
        type : String
    }
});

//Model
const User = mongoose.model("user_list",userSchema); 

app.use(express.urlencoded({extended:false}));

app.post("/rahul-users",(req,res)=>{
    const user = req.body;
    console.log(user);
    if(!user.user_name){
        res.status(400).send({msg : "user_name is a required field"});
        next();
    }
    User.create({
        user_name : user.user_name,
        user_age : user.user_ageeee,
        user_college : user.user_college
    });

    res.status(201).send({msg : "User Successfully Created"});
})

app.get("/get-rahul-users",(req,res)=>{
    User.find().then((user)=>res.send(user));
    
})

app.listen(4200,()=>{
    console.log("Server Started");
})