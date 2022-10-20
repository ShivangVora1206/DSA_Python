const express = require("express");
const fs = require("fs");
const session = require("express-session");
const multer = require("multer");
const startDb = require("./database/init");
const userModel = require("./database/models/user");
const todoModel = require("./database/models/todos");

startDb();

const app = express();
var storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req, file, callback) {
    callback(null, file.originalname);
    }
    });
var upload = multer({ storage: storage });
// const upload = multer({dest : "uploads"});
let todos = [];

app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
    }))


app.set("view engine", "ejs");
app.set("views", "./public/views");

app.get("/logout", (request, response)=>{
    request.session.destroy((err)=>{
        if(err){
            console.log("error destroying a session");
        }else{

            response.redirect("/signup");
        }
    });
})

app.get("/getusername", (request, response)=>{
    console.log(request.session);
    response.json(request.session.username);
})

app.get("/invalidlogin", (request, response)=>{
    response.sendFile(__dirname+"/public/html/invalidlogin.html");
})

app.get("/invalidsignup", (request, response)=>{
    response.sendFile(__dirname+"/public/html/invalidsignup.html");
})

app.get("/", (request, response) => {
    if(request.session.isLoggedIn){
        response.render("index", {username:request.session.username, profile:request.session.profile});
    }else{
        response.redirect("/login");
    }
});



app.route("/login").get(function(request, response)
{
    if(request.session.isLoggedIn){
        response.redirect("/");
    }else{
        response.sendFile(__dirname+"/public/html/login.html")
    }
})
.post(function(request, response)
{
	getUser(request.body, function( err, user )
	{
        if(err){
            response.redirect("/invalidLogin");
        }
		else
		{
            request.session.username = user[0].username;
            request.session.profile = user[0].profile;
            request.session.isLoggedIn = true;
            response.redirect("/")

		}
	});

});



// app.get("/uploads/:id", (request, response)=>{
//     response.sendFile(__dirname+"/uploads/"+request.params.id);
// })

app.get("/signup", (request, response) =>{
    if(request.session.isSignedUp){
        response.redirect("/login");
    }else{
        response.sendFile(__dirname+"/public/html/signup.html");
    }
})
.post("/signup",upload.single("profile") , (request, response) => {
    
    const user = {
        username:request.body.username,
        password:request.body.password,
        profile:request.file.filename
    }

    saveUser(user, (err)=>{
        if(err){
            response.redirect("/invalidsignup");
        }else{
            console.log(request.file);
            request.session.isSignedUp = true;
            response.redirect("/login");
        }
    })
})
app.get("/readTodo", (request, response) => {
    getDataFromDB(request.session.username, (err, todos)=>{
        if(err){
            console.log("error reading file");
        }
        else{
            
            response.json(todos);
        }
    });
})


app.post("/addTodo", (request, response) => {
    addTodoToDB(request.body, (err)=>{
        if(err){
            console.log("Error adding todo");
        }else{
            response.redirect("/");
        }
    });
})

app.post("/updateTodoState", (request, response) => {
    todoModel.findOneAndUpdate({author:request.session.username, task:{data:request.body.task.data, status:0}}, {task:{data:request.body.task.data, status:1}})
    .then((data)=>{
        console.log(data);
        response.redirect("/");
    }).catch(()=>{
        console.log("error updating state in DB");
    })
})

app.post("/deleteTodo", (request, response) => {
    todoModel.deleteOne({author:request.session.username, "task.data":request.body.task.data})
    .then((data)=>{
        console.log(data);
        response.redirect("/");
    }).catch(()=>{
        console.log("error deleting from DB");
    })
})

app.post("/updateTodoValue", (request, response) => {
    todoModel.findOneAndUpdate({author:request.session.username, "task.data":request.body.oldTask.task.data}, {task:{data:request.body.newTask, status:request.body.oldTask.task.status}})
    .then((data)=>{
        console.log(data);
        response.redirect("/");
    }).catch(()=>{
        console.log("error updating state in DB");
    })
})

app.listen(3000, () => {
    console.log("Server Ready!");
})



function saveUser(user, callback)
{
    userModel.create(user).then(()=>{
        callback(null);
    }).catch(()=>{
        callback(true);
    })
}

function getUser(form, callback)
{
    console.log(form);
    userModel.find({username:form.username, password:form.password})
    .then((data)=>{

        if(data.length){
            callback(false, data);
        }

    }).catch((e)=>{
        console.log(e);
        console.log("error getting data from db");
        callback(true);
    });
}

function getDataFromDB(username, callback) {
    todoModel.find({author:username}).then((data)=>{
        callback(null, data);
    }).catch(()=>{
        callback(true);
    })
}

function addTodoToDB(todo, callback){
    todoModel.create(todo).then(()=>{
        callback(null);
    }).catch(()=>{
        callback(true);
    })
}

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