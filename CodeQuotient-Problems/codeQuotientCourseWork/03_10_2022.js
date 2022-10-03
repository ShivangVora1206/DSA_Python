//lecture project link https://projects.codequotient.com/project/supercoders-node-3p34g82fr89l8bm0w50


const { response } = require("express");
const express = require("express");
//express adds modularity to our code
const app = express();

app.use(express.static("public"));
app.use(express.json());//adds a body variable to request if it has a json body
//looks at header for each request and is the header mentions the data type it will parse it


app.get("/", function(request, response){
    response.sendFile(__dirname+"internalPathOfindex.html");
    // response.end("home");
})
// app.post()
// app.put()

//middleware

app.route("/todo").get(GetTodo).post(PostTodo);

app.listen(3000, function (){
    console.log("server is live");
})

function GetTodo(request, response){
    response.json(todos);//no need to stringify and sends automatically
}