const http = require("http");

const myServer = http.createServer((req,res)=>{
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('GET request received');
      } else if (req.method === 'POST' && req.url === '/submit') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('POST request received');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Page not found');
      }
      res.end();
})

myServer.listen(8000, ()=>{
    console.log("Server Started");
})