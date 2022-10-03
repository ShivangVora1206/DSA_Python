const express = require("express");
const fs = require("fs");
const app = express();
let todos = [];
app.use(express.static("public"));
app.use(express.json());

app.get("/", (request, response) => {
    response.sendFile(__dirname+"/public/html/index.html");
});

app.get("/readTodo", (request, response) => {
    getDataFromFile((err, data)=>{
        if(err){
            console.log("error reading file");
        }
        else{
        todos = data;
        response.json(data);
        }
    });
})

app.post("/addTodo", (request, response) => {
    getDataFromFile((err, data)=>{
        todos = data;
        todos.push(request.body);
        console.log(todos);
        writeDataToFile(todos, (err, boolean)=>{
            if(err){
                console.log("error adding file");
            }else{
                console.log("task added");
            }
        });
    });
})

app.post("/updateTodoState", (request, response) => {
    getDataFromFile((err, data)=>{
        todos = data;
        console.log(todos);
        let newTodo = request.body;
        console.log(newTodo);
        for(let i=0; i < todos.length; i++){
            if(todos[i].task.data === newTodo.task.data){
                todos[i] = newTodo;
                break
            }
        }

        writeDataToFile(todos, (err, boolean)=>{
            if(err){
                console.log("error adding file");
            }else{
                console.log("task added");
            }
        });
    });
})

app.post("/deleteTodo", (request, response) => {
    getDataFromFile((err, data)=>{
        todos = data;
        console.log(todos);
        let newTodo = request.body;
        console.log(newTodo);
        for(let i=0; i < todos.length; i++){
            if(todos[i].task.data === newTodo.task.data){
                todos.splice(i, 1);
                break
            }
        }

        writeDataToFile(todos, (err, boolean)=>{
            if(err){
                console.log("error writing file");
            }else{
                console.log("task deleted");
            }
        });
    });
})

app.post("/updateTodoValue", (request, response) => {
    getDataFromFile((err, data) => {
        todos = data;
        console.log(todos);
        let requestBody = request.body;
        for(let i=0; i < todos.length; i++){
            if(todos[i].task.data === requestBody.oldTask.task.data){
                todos[i].task.data = requestBody.newTask;
                break
            }
        }

        writeDataToFile(todos, (err, boolean)=>{
            if(err){
                console.log("error updating file");
            }else{
                console.log("task updated");
            }
        });
    });
})

app.listen(3000, () => {
    console.log("Server Ready!");
})

function getDataFromFile(callback){
    fs.readFile("database.json", (err, data) => {
        if(err){
            console.log("error read tasks from file");
            callback(err, null);
        }
        else{
            console.log("data sent");
            callback(null, JSON.parse(data));
        }
    })
}

function writeDataToFile(todos, callback){
    fs.writeFile("database.json",JSON.stringify(todos) , (err, data) => {
        if(err){
            console.log("error read tasks from file");
            callback(err, null);
        }
        else{
            console.log("data written");
            callback(null, true);
        }
    })
}