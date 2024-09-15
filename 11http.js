const http = require("http");
const fs = require("fs");

// fs.writeFile("./myfile/3test.txt",`Rahul\n`,(err,res)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     if(res){
//         console.log("Result",res);
//     }
// })

const myServer = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url == '/favicon.ico'){
        console.log("Favicon");
        return ;
    }
    if(req.url == "/"){
        fs.appendFile("./myfile/5test.txt", `${Date.now()} : Home Page\n`,(err,result)=>{
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
        fs.appendFile("./myfile/5test.txt", `${Date.now()} : About Page\n`,(err,result)=>{
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
        fs.appendFile("./myfile/5test.txt", `${Date.now()} : Contact Page\n`,(err,result)=>{
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
        fs.appendFile("./myfile/5test.txt", `${Date.now()} : Not Found Page\n`,(err,result)=>{
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