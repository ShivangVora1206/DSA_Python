// the Node js session
//lecture project https://projects.codequotient.com/project/supercoders-node-3p34g82fr89l8bm0w50

const http = require("http");
const fs = require("fs");

function requestHandler (request, response) {
    // console.log("new request recieved");
    // response.end("Hello world");
    const path = request.url;
    const method = request.method;

    if(path === "/"){
        fs.readFile("./public/html/index.html", "utf-8", function (err, data) {
            if(err){
                response.end("something went wrong");
            }
            else{
                response.setHeader("Content-Type","text/html");
                response.end(data);
            }
        });
        // response.end("homePage");
        console.log(path);
    }

    else if(path === "/about"){
        response.end("about us");
        console.log(path);
    }

    else if(path === "/style.css"){
        fs.readFile("./public/css/style.css", "utf-8", function (err, data) {
            if(err){
                response.end("something went wrong");
            }
            else{
                response.setHeader("Content-Type","text/css");
                response.end(data);
            }
        });
    }

    else if(path === "/script.js"){
        fs.readFile("./public/js/script.js", "utf-8", function (err, data) {
            if(err){
                response.end("something went wrong");
            }
            else{
                response.setHeader("Content-Type","text/javascript");
                response.end(data);
            }
        });
    }
    
    else{
        response.end("error 404");
        console.log(path);
    }
}

const startServer = http.createServer(requestHandler);

startServer.listen(8000, function (){
    console.log("server started successfully");
});