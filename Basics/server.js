const http = require('http')

http.createServer((req, res)=>{
    res.write("<h1>This is the basic server of node js, listning on port: 2000</h1>");
    res.end();
}).listen(2000)