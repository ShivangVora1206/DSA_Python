const express = require("express");
const fs = require("fs");
const session = require("express-session");
const multer = require("multer");

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
        getDataFromFile((err, data)=>{
            let _todos = data.filter((value)=>{
                if(value.author === request.session.username){
                    return true;
                }
            })
            response.render("index", {username:request.session.username, profile:request.session.profile, tasks:_todos});
        })
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
	getUser(function( users )
	{
		const user = users.filter(function(user)
		{
			if( user.username === request.body.username && user.password === request.body.password )
			{
				return true
			}
		})

		if(user.length)
		{
            console.log(user);
            request.session.username = user[0].username;
            request.session.profile = user[0].profile;
			request.session.isLoggedIn = true;
            // console.log(request.session);
			response.redirect("/")
		}
		else
		{
			response.redirect("/invalidLogin");

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

function saveUser(user, callback)
{
	getUser(function(users)
	{   var temp = users.filter((value)=>{
        if(value.username === user.username){
            return true;
        }
    })
        if(temp.length){
            callback(true);
            return
        }else{

            users.push(user);
        }

		fs.writeFile("credentials.json", JSON.stringify(users), function()
		{
			callback();
		});
	})
}

function getUser(callback)
{
	fs.readFile("credentials.json", "utf-8", function(err, data)
	{
		if(data)
		{
			callback(JSON.parse(data));
		}
	})
}
app.get("/readTodo", (request, response) => {
    getDataFromFile((err, data)=>{
        if(err){
            console.log("error reading file");
        }
        else{
        todos = data.filter((value)=>{
            if(value.author === request.session.username){

                return true;
            };
        });
        response.json(todos);
        }
    });
})

function createTaskId(data){
    let temp = String(data);
    let sum = "";
    for(let i=0;i<temp.length;i++){
        sum += temp.charCodeAt(i);
    }
    console.log(sum);
    return String(parseInt(parseInt(sum)/3.14)).slice(0, 6);
}

app.post("/addTodo", upload.single("taskImage"), (request, response) => {
    getDataFromFile((err, data)=>{
        let template = {
            "task":{
                    "data":request.body.newTodo, "status":0
                    },
            "author":request.session.username,
            "taskId":createTaskId(request.body.newTodo),
            "taskImage":request.file.filename
        }
        todos = data;
        todos.push(template);
        console.log(todos);
        writeDataToFile(todos, (err, boolean)=>{
            if(err){
                console.log("error adding file");
            }else{
                console.log("task added");
                response.redirect("/");
            }
        });
    });
})

app.post("/updateTodoState", (request, response)=>{
    getDataFromFile((err, data)=>{
        if(err){
            console.log("error reading file from file");
        }else{
            let todos = data;
            todos.filter((value)=>{
                if(value.taskId === request.body.completeButton){
                    value.task.status = 1;
                    return true;
                }
            })
            writeDataToFile(todos, (err, flag)=>{
                if(err){
                    console.log("error writing to file");
                }else{
                    console.log("data written");
                    response.redirect("/");
                }
            })
        }
    });
})


app.post("/deleteTodo", (request, response) => {
    getDataFromFile((err, data)=>{
        todos = data;
        console.log(todos);
        let newTodo = request.body.deleteButton;
        console.log(newTodo);
        for(let i=0; i < todos.length; i++){
            if(todos[i].taskId === newTodo){
                todos.splice(i, 1);
                break
            }
        }

        writeDataToFile(todos, (err, boolean)=>{
            if(err){
                console.log("error writing file");
            }else{
                console.log("task deleted");
                response.redirect("/");
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
            if(todos[i].taskId === requestBody.oldTask.taskId){
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