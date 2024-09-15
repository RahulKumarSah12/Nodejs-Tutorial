const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.urlencoded({extended:false}));

//Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/rahul-users")
    .then(()=>{console.log("MongoDB Connected")})
    .catch((err)=>{console.log("Error",err)});

//Schema
const mySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    number : {
        type : Number
    }
});

//Model
const Data = mongoose.model("data",mySchema);

app.post("/post-data",(req,res)=>{
    const user = req.body;
    if(!user.data_name){
        res.status(400).send({msg:"Name is required field"});
        next();
    }
    if(!user.data_email){
        res.status(400).send({msg:"Email is required field"});
        next();
    }

    Data.create({
        name : user.data_name,
        email : user.data_email,
        number : user.data_number
    });

    res.status(201).send({msg:"User Created"});
})

app.get("/get-data",(req,res)=>{
    Data.find()
        .then((user)=>res.send(user));
})


app.listen(4500,()=>{
    console.log("Server Started");
})