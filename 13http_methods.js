const http = require("http");
const url = require("url");

const myServer = http.createServer((req,res)=>{
    const myUrl = url.parse(req.url,true);
    if(myUrl.pathname=="/"){
        if(req.method=="GET"){
            res.end("Welcome to Home Page");
            console.log(req.method);
        }
        else if(req.method=="POST"){
            res.end("Fill this form");
            console.log(req.method);
        }
    }
    else if(myUrl.pathname=="/about"){
        res.end("Welcome to About Page");
    }
    else if(myUrl.pathname=="/contact"){
        res.end("Welcome to Contact Page");
    }
    else{
        res.end("Not Found Page");
    }
})

myServer.listen(4400,()=>{console.log("Server started")});



// ----------------------------------------------------------------


// const http = require("http");

// function solve(req,res){
//     if(req.url=="/"){
//         res.end("Home Page");
//     }
//     else if(req.url=="/about"){
//         res.end("About Page");
//     }
//     else{
//         res.end("Page Not Found");
//     }
// }

// const myServer = http.createServer(solve);

// function result(){
//     console.log("Server Started");
// }

// myServer.listen(3000,result);



