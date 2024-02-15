var http = require("http");
const fs = require('node:fs');
http.createServer(function (request,response){
    fs.readFile('./harjoitukset/practice_files_WS0/index.html', (err, data) => {
        if(err){
            console.log("Failed")
            throw err;
        } else {
            console.log(data)
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data)
            response.end()
        }
    })
}).listen(8081)
console.log("Server Running at https://localhost:8081")