// the Node js session
// https://projects.codequotient.com/project/supercoders-node-3p34g82fr89l8bm0w50

const http = require("http");

function requestHandler (request, response) {
    // console.log("new request recieved");
    // response.end("Hello world");
    const path = request.url;
    const method = request.method;

    if(path === "/"){
        response.end("homePage");
        console.log(method);
    }
    else if(path === "/about"){
        response.end("about us");
        console.log(method);
    }
    else{
        response.end("error 404");
        console.log(method);
    }
}

const startServer = http.createServer(requestHandler);

startServer.listen(8000, function (){
    console.log("server started successfully");
});