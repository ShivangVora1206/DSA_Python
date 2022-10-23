const express = require("express");
const session = require("express-session");
const fs = require("fs");
const multer = require("multer");
const app = express();

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

var storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req, file, callback) {
    callback(null, file.originalname);
    }
    });
var upload = multer({ storage: storage });

app.set("view engine", "ejs");
app.set("views", "./public/views");

app.get("/", (request, response)=>{
    if(!request.session.isLoggedIn){
        response.redirect("/login");
    }
    getProducts((err, data)=>{
        if(err){
            console.log("Error getting products");
        }else{
            let curCount = 5;
            data = data.slice(0, curCount);
            // console.log(request);
            response.render("index", {username:request.session.username, products:data, curCount:curCount});
        }
    })
}).post("/", (request, response)=>{
    if(!request.session.isLoggedIn){
        response.redirect("/login");
    }
    getProducts((err, data)=>{
        if(err){
            console.log("Error getting products");
        }else{
            console.log(request.body);
            let curCount = parseInt(request.body.lastCount) + 5;
            data = data.slice(0, curCount);
            // console.log(data.length);
            response.render("index", {username:request.session.username, products:data, curCount:curCount});
        }
    })
    
})


app.get("/getProducts", (request, response)=>{
    getProducts((err, data)=>{
        if(err){
            console.log("Error getting products");
        }else{
            // console.log(data);
            response.json(data);
        }
    })
})


app.get("/login", (request, response)=>{
    if(request.session.isLoggedIn){
        response.redirect("/");
    }
    response.sendFile(__dirname+"/public/html/login.html");
}).post("/login", (request, response)=>{
    getUserData((err, data)=>{
        if(err){
            console.log("Error Logging In");
        }else{

            let user = data.filter((value)=>{
                if(value.username === request.body.username && value.password === request.body.password){
                    return true;
                }
            })
            console.log(user);
            if(user.length){
                request.session.username = user[0].username;
                request.session.isLoggedIn = true;
                response.redirect("/");
            }else{
                response.redirect("/login");
            }
    }
    })
})

app.get("/signup", (request, response)=>{
    response.sendFile(__dirname+"/public/html/signup.html");
}).post("/signup", upload.single("profile"), (request, response)=>{
    getUserData((err, data)=>{
        let users = data;
        let user = {
            username : request.body.username,
            password : request.body.password,
            profile : request.file.filename
        }
        users.push(user);
        console.log(users);
        writeUserData(users, (err)=>{
            if(err){
                console.log("Error sign up");
            }else{
                response.redirect("/login");
            }
        })
    })
})

app.get("/logout", (request, response)=>{
    request.session.destroy((err)=>{
        if(err){
            console.log("Erros destroying session");
        }else{
            console.log("Session Destroy");
            response.redirect("/login");
        }
    })
})


function getUserData(callback) {
    fs.readFile("credentials.json", (err, data)=>{
        if(err){
            console.log("Error Reading Data From File");
            callback(true);
        }else{
            console.log("File Read Successfully");
            callback(false, JSON.parse(data));
        }
    })
}

function getProducts(callback) {
    fs.readFile("products.json", (err, data)=>{
        if(err){
            console.log("Error Reading Data From File");
            callback(true);
        }else{
            console.log("File Read Successfully");
            // console.log(JSON.parse(data));
            callback(false, JSON.parse(data));
        }
    })
}

function writeUserData(data, callback) {
    fs.writeFile("credentials.json", JSON.stringify(data), (err)=>{
        if(err){
            console.log("Error Writing Data To File");
            callback(true);
        }else{
            console.log("Written Data Successfully");
            callback(false);
        }
    })
}

app.listen(3000, ()=>{
    console.log("Server Ready!");
})