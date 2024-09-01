const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{
    fs.appendFile("./myfile/1test.txt",`${req.url} : Great Work\n`,(err)=>{
        console.log("Error", err);
    })
    res.end("Done");
})

console.log("Rohit");

myServer.listen(9000, () => {console.log("Server Started")});

console.log("Rahul");