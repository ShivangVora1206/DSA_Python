const express = require("express");
const session = require("express-session");
const fs = require("fs");
app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
    }))

app.get("/", (request, response)=>{
    if(request.session.isLoggedin){
        console.log("logged in");
        response.sendFile(__dirname+"/public/html/index.html");
    }else{
        console.log(request.session);
        console.log("not logged in");
        response.redirect("/login");
    }
})

app.get("/getUserName", (request, response)=>{
    response.json(request.session.username);
})

app.get("/getEntries", (request, response)=>{
    getEntriesFromFile((err, data)=>{
        let entries = JSON.parse(data);
        entries = entries.filter((value)=>{
            if(value.author === request.session.username){
                return true;
            }
        })
        response.json(entries);
    })
})

app.post("/setEntries", (request, response)=>{
    getEntriesFromFile((err, data)=>{
        entries = JSON.parse(data);
        entries.push(request.body.entry);
        fs.writeFile("diaryEntries.json", JSON.stringify(entries), (err)=>{
            if(err){
                console.log("error writing a file");
            }else{
                console.log("file written");
                response.end();
            }
        })
    })
})

app.post("/deleteEntries", (request, response)=>{
    getEntriesFromFile((err, data)=>{
        var entries = JSON.parse(data);
        entries = entries.filter((value)=>{
            if(value.author === request.body.author && value.body === request.body.body && value.date === request.body.date && value.time === request.body.time){
                return false;
            }else{
                return true;
            }
        })
        fs.writeFile("diaryEntries.json", JSON.stringify(entries), (err)=>{
            if(err){
                console.log("error writing a file");
            }else{
                console.log("file written");
                response.end();
            }
        })
    })
    
})

app.get("/login", (request, response)=>{
    if(request.session.isLoggedin){
        
        response.redirect("/");

    }else{
        
        response.sendFile(__dirname+"/public/html/login.html");
    }
})

app.get("/signup", (request, response)=>{
    if(request.session.isLoggedin){
        response.redirect("/");
    }else{

        response.sendFile(__dirname+"/public/html/signup.html");
    }
})

app.post("/signup", (request, response)=>{
    getUsersFromFile((err, data)=>{
        let users = JSON.parse(data);
        users.push({"username":request.body.username, "password":request.body.password});
        fs.writeFile("credentials.json", JSON.stringify(users), (err)=>{
            if(err){
                console.log("error writing a file");
            }else{
                console.log("file written");
                response.redirect("/login");
            }
        })
    })
})

app.get("/loginfailed", (request, response)=>{
    response.sendFile(__dirname+"/public/html/loginFailed.html");
})

app.post("/login", (request, response)=>{
    console.log(request.body);
    verifyUser(request.body.username, request.body.password, (flag)=>{
        if(!flag){
            console.log("error logging in");
            response.redirect("/loginfailed");
        }else{
            request.session.username = request.body.username;
            request.session.isLoggedin = true;
            response.redirect("/");
        }
    })
})

app.get("/logout", (request, response)=>{
    request.session.destroy((err)=>{
        if(err){
            console.log("error destroying a session");
        }else{

            response.redirect("/login");
        }
    });
})

function getUsersFromFile(callback){
    fs.readFile("credentials.json", (err, data)=>{
        if(err){
            callback(false);
        }else{
                callback(null, data);
            }
            })
    }

    function getEntriesFromFile(callback){
    fs.readFile("diaryEntries.json", (err, data)=>{
        if(err){
            callback(false);
        }else{
                callback(null, data);
            }
            })
    }

    
function verifyUser(username, password, callback) {
    getUsersFromFile((err, data)=>{
        
        users = JSON.parse(data);
        let user = users.filter((value)=>{
            if(value.username === username && value.password === password){
                return true;
            }
        });
        if(user.length){
            callback(true);
        }else{
            callback(false);
        }
    })
}

app.listen(3000, ()=>{
    console.log("Server running!");
})