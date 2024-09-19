const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({extended:false}));

// Connection
mongoose
    .connect("mongodb://localhost:27017/college_database")
    .then(()=>console.log("Mongoose Connected"))
    .catch((err)=>console.log("Error",err))


// Schema
const CollegeSchema = new mongoose.Schema({
    student_name : {
        type : String,
        required : true
    },
    student_roll : {
        type : Number,
        required : true
    },
    student_section : {
        type : String,
        required : true
    }
});

// Model
const Students = mongoose.model("students_data", CollegeSchema);

// Routes
app.post("/about_students", (req,res)=>{
    const body = req.body;
    console.log(body);
    Students.create({
        student_name : body.name,
        student_roll : body.roll,
        student_section : body.section
    });

    if(!body || !body.name || !body.roll || !body.section){
        res.status(400).send("All field are required");
        next();
    }
    else{
        res.status(201).send("User Successfully Created");
    }
});

app.get("/get_students", (req,res)=>{
    Students.find()
        .then((result)=>{
            if(result.length == 0){
                console.log("There are no students in the database");
                res.status(200).send("There are no students in the database");
            }
            else{
                console.log("Result",result);
                res.send(result);
            }
        })
        .catch((err)=>{
            console.log("Error",err);
            res.send(err);
        })
});

app.get("/get_students/:id", (req,res)=>{
    const student_id = req.params.id;
    console.log(student_id);
    Students.findById(student_id)
        .then((result)=>{
            console.log("Result",result);
            res.send(result);
        })
        .catch((err)=>{
            console.log("Error", err);
            res.send("Student not found");
        });
});

app.delete("/delete_students", (req,res)=>{
    Students.deleteMany()
        .then((result)=>{
            console.log("Result",result);
            if(result.deletedCount == 0){
                res.send("There are no students in the database to delete");
            }
            else{
                res.send("All students deleted successfully");
            }
        })
        .catch((err)=>{
            console.log("Error",err);
            res.send(err);
        })
});

app.delete("/delete_student/:id", (req,res)=>{
    const student_id = req.params.id;
    Students.findByIdAndDelete(student_id)
        .then((result)=>{
            console.log("Result",result);
            if(result == null){
                res.send("There is no such user with this id");
            }
            else{
                res.send("Student deleted successfully");
            }
        })
        .catch((err)=>{
            console.log("Error",err);
        })
});

app.patch("/edit_student/:id", (req,res)=>{
    const student_id = req.params.id;
    const updatedStudent = req.body;
    console.log(updatedStudent);
    Students.findByIdAndUpdate(student_id, updatedStudent, {new:true})
        .then((result)=>{
            if(result==null){
                console.log("There is no such student with this id");
                res.send("There is no such student with this id");
            }
            else{
                console.log("Result",result);
                res.send(result);
            }
        })
        .catch((err)=>{
            console.log("Error",err);
        })
});

app.listen(4500,()=>{
    console.log("Server Started");
})