const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.urlencoded({extended:false}));


// Connection
mongoose
    .connect("mongodb://localhost:27017/rahul-users")
    .then(()=>{
        console.log("MongoDB Connected");
    })
    .catch((err)=>{
        console.log("Error",err);
    });

// Schema
const EmployeeSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    empId : {
        type : Number
    },
    salary : {
        type : Number
    }

})

// Model
const Employee = mongoose.model("EmployeeData", EmployeeSchema);

app.get("/get_emp_data",(req,res)=>{
    Employee.find()
        .then((user)=>res.send(user));
})

app.get("/get_emp_data/:id", (req,res)=>{
    const id = req.params.id;
    Employee.findById(id)
        .then((user)=>res.send(user));
})

app.post("/add_emp", (req,res)=>{
    const emp = req.body;
    if(!emp.emp_name || !emp.emp_email){
        res.status(400).send("Name and Email is required");
        next();
    }
    Employee.create({
        name : emp.emp_name,
        email : emp.emp_email,
        id : emp.emp_id,
        salary : emp.emp_salary
    });

    console.log("User Created");
    console.log(emp);
    console.log(req.headers);
    res.status(201).send("Employee Successfully Created");
})

app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;
    Employee.findByIdAndDelete(id)
        .then((resp) => {
            if(!resp) return res.status(400).send("Id not found");
            res.send("Employee Deleted Successfully")
        });
})


app.listen(7600,()=>{
    console.log("Server Started");
})