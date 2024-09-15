const http = require("http");

console.log(http);
console.log(http.STATUS_CODES);
console.log(http.METHODS);

const myServer = http.createServer((req,res)=>{
    console.log("Rahul");
    console.log(req.headers);
    // console.log(req);
    res.end("Hello From Server");
})

myServer.listen(9000, ()=>{
    console.log("Done");
})
