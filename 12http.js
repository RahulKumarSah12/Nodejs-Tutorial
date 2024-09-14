const http = require("http");
const url = require("url");

const myServer = http.createServer((req,res)=>{
    const myUrl = url.parse(req.url, true);
    if(myUrl.path=='/favicon.ico'){
        return ;
    }
    console.log(myUrl);
    if(myUrl.pathname=="/"){
        if(myUrl.query.name!=undefined){
            res.end(`Welcome to Home Page ${myUrl.query.name}`);
        }
        else{
            res.end(`Welcome to Home Page`);
        }
    }
    else if(myUrl.pathname=="/about"){
        if(myUrl.query.name!=undefined){
            res.end(`Welcome to About Page ${myUrl.query.name}`);
        }
        else{
            res.end(`Welcome to About Page`);
        }
    }
    else{
        res.end("Page Not Found");
    }
})

myServer.listen(4500,()=>{
    console.log("Server Started");
})