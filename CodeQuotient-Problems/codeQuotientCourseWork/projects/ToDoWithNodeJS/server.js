const http = require("http");
const fs = require("fs");

let todos = [];

fs.readFile("database.json", "utf-8", function (err, data) {
    if(err){
        response.end("error reading todos from database");
    }
    else{
        todos = JSON.parse(data);
    }
});

function requestHandler(request, response) {
    
    const path = request.url;
    
    const method = request.method;
        
    if(path === "/"){
        fs.readFile("./html/index.html", "utf-8", function (err, data) {
            if(err){
                response.end("something went wrong");
            }
            else{
                response.setHeader("Content-Type","text/html");
                response.end(data);
            }
        });
    }
    else if(path === "/style.css"){
        fs.readFile("./css/style.css", "utf-8", function (err, data) {
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
        fs.readFile("./js/script.js", "utf-8", function (err, data) {
            if(err){
                response.end("something went wrong");
            }
            else{
                response.setHeader("Content-Type", "text/javascript");
                response.end(data);
            }
        });
    }
    else if(path === "/newTodo" && method === "POST"){
        getDataFromRequest(request, function (error, data) {
            if(error){
                response.end("error getting request data");
            }
            else{
                todos.push(data.task);
                storeTodos(todos);
            }
        })
    }
    else if(path === "/readTodo" && method === "GET"){
        response.end(JSON.stringify(todos));
    }
    else if(path === "/updateTodoState" && method === "POST"){
        getDataFromRequest(request, function (error, data) {
            if(error){
                response.end("something went wrong");
            }
            else{
                let task = data.task;
                for(var i=0;i<todos.length;i++){
                    if(todos[i].data === task.data && todos[i].status === task.status){
                        todos[i].status = 1;
                        break;
                    }
                }
                storeTodos(todos);
                response.end();
            }
        })
    }
    else if(path === "/deleteTodo" && method === "POST"){
        getDataFromRequest(request, function (error, data) {
            if(error){
                response.end("something went wrong");
            }
            else{
                let task = data.task;
                for(var i=0;i<todos.length;i++){
                    if(todos[i].data === task.data && todos[i].status === task.status){
                        todos.splice(i, 1);
                        break;
                    }
                }
                storeTodos(todos);
                response.end();
            }
        })
    }
    else if(path === "/updateTodoValue" && method == "POST"){
        getDataFromRequest(request, function (error, data) {
            if(error){
                response.end("something went wrong");
            }
            else{
                let task = data.oldTask;
                for(var i=0;i<todos.length;i++){
                    if(todos[i].data === task.data && todos[i].status === task.status){
                        todos[i].data = data.newTask;
                        break;
                    }
                }
                storeTodos(todos);
                response.end();
            }
        })
    }
}

function storeTodos(array) {
    fs.writeFile("database.json", JSON.stringify(array), function (err){
        if(err){
            console.log("error while writing data");
        }else{
            console.log("todos written successfully");
        }
    });
}

const startServer = http.createServer(requestHandler);
startServer.listen(8000, function () {
    console.log("Server Initiated Successfully!");
});

function getDataFromRequest(request, callback)
{
	let body = "";

    request.on("data", (chunk) => {
        body += chunk;
    });

    request.on("end", () => {
        try {
            let json = JSON.parse(body);
            callback(null, json)
        } catch (error) {
						
            callback("error occured");
        };
    });
}