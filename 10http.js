const http = require("http");
const fs = require("fs");

fs.writeFile("./myfile/3test.txt",`Rahul\n`,(err,res)=>{
    if(err){
        console.log("Error",err);
    }
    if(res){
        console.log("Result",res);
    }
})

console.log("Rahul");

const myServer = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url == "/"){
        fs.appendFile("./myfile/3test.txt", `Home Page\n`,(err,result)=>{
            if(err){
                console.log("Error",err);
            }
            else{
                console.log("Result",result);
            }
        })
        res.end("Home Page");
    }
    else if(req.url == "/about"){
        fs.appendFile("./myfile/3test.txt", `About Page\n`,(err,result)=>{
            if(err){
                console.log("Error",err);
            }
            else{
                console.log("Result",result);
            }
        })
        res.end("About Page");
    }
    else if(req.url == "/contact"){
        fs.appendFile("./myfile/3test.txt", `Contact Page\n`,(err,result)=>{
            if(err){
                console.log("Error",err);
            }
            else{
                console.log("Result",result);
            }
        })
        res.end("Contact Page");
    }
    else{
        fs.appendFile("./myfile/3test.txt", `Not Found\n`,(err,result)=>{
            if(err){
                console.log("Error",err);
            }
            else{
                console.log("Result",result);
            }
        })
        res.end("Not Found");
    }
})

myServer.listen(5000, ()=>{console.log("Server Started")});