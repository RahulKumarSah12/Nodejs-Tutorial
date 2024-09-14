const express = require("express");
const app = express();

const users = require("./myfile/MOCK_DATA.json");
console.log(users);

let email = [];
for(let i = 0; i<users.length; i++){
    email[i] = users[i].email;
}
console.log(email);

app.get("/users",(req,res)=>{
    res.send(email);
})

app.get("/users/email",(req,res)=>{
    res.send(email);
})

app.listen(4200,()=>{
    console.log("Server Started!!!");
})