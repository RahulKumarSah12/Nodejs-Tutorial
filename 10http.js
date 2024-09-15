const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{
    fs.appendFile('./myfile/4test.txt', `${Date.now()} : Hello From Server : ${req.url}\n`,()=>{
        console.log("Code Executed");
    });
    res.end("Done!!!");
})

myServer.listen(7200, ()=>{
    console.log("Server Started");
})