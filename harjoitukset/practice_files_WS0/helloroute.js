var http = require('http');
http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    if(request.url === "/helloworld"){
        response.end('Hello World!')
    }
    else {
        response.end('Home Page')
    }
}).listen(8081)
console.log("Listening on localhost:8081")