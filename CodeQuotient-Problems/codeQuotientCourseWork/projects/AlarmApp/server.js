const express = require("express");
const session = require("express-session");
const fs = require("fs");
const startDb = require("./database/init");
const app = express();
const postLogin = require("./controllers/postLogin");
const postUserSignup = require("./controllers/postUserSignup");
const alarmModel = require("./database/models/alarm");
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const userModel = require("./database/models/user");
const io = new Server(server);

startDb();

let map = {}
//ADD USERNAME TO SOCKID MAPPING
let usernameToSockId = {}

app.use(express.static("public"));
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


app.get("/", (req, res)=>{
    if(!req.session.isLoggedIn){
        res.redirect("/login");
    }else{
            res.render("index", {username:req.session.username});
            io.once("connection", (socket)=>{
            console.log("A new user connected", socket.id);
            io.to(socket.id).emit("from-server", "To Id"+socket.id)

            socket.on("username-handshake", (sockRes)=>{
                let uname = sockRes;
                console.log("username found", uname);
                if(usernameToSockId[uname] === undefined){
                    usernameToSockId[uname] = socket.id;
                }else{
                    socket.join(usernameToSockId[uname]);
                }
            })

            socket.on("disconnect", ()=>{
                console.log("disconnected", socket.id);
                for(var uname in usernameToSockId) {
                    if(usernameToSockId.hasOwnProperty(uname) && usernameToSockId[uname] == socket.id) {
                        delete usernameToSockId[uname];
                    }
                }
            })

            socket.on("from-client", (sockRes)=>{
                console.log(sockRes);
                let uname = JSON.parse(sockRes.split("|")[0]);
                let alarm = JSON.parse(sockRes.split("|")[1]);
                alarm.user = req.session.username;
                alarm.primaryKey = parseInt(""+alarm.year+""+alarm.month+""+alarm.day+""+alarm.hours+""+alarm.mins+"");
                console.log(alarm);
                console.log(usernameToSockId);


                alarmModel.create(alarm).then((data)=>{
                    console.log(data);
                    userModel.updateOne({username:req.session.username}, {$push: {alarms:alarm}})
                    .then((data)=>{
                        console.log(data);
                    }).catch((e)=>{
                        console.log(e);
                    })
                }).catch((e)=>{
                    console.log(e);
                });

                
                // let key = alarm.mins+socket.id;
                // let interval = setInterval(()=>{
                //     let date = new Date();
                //     let curyear = date.getFullYear();
                //     let curmonth = date.getMonth()+1;
                //     let curday = date.getDay()-1;
                //     let curhours = date.getHours();
                //     let curmins = date.getMinutes();
                //     console.log(curmins);
                //     if(alarm.year === curyear && alarm.month === curmonth && alarm.day===curday && alarm.hours === curhours && alarm.mins === curmins){
                //         console.log("Alert Alarm");
                //         //ADD SERVER TO PARTICULAR CLIENT ALERT
                //         io.to(usernameToSockId[uname]).emit("alarm-from-server", "To Id"+socket.id)
                //         console.log(map);
                //         map[key].forEach(value => {
                //             clearInterval(value);
                //         });
                //     }
                // }, 1000)
                // if(map[key] === undefined){
                //     map[key] = [interval];
                // }else{
                //     map[key].push(interval);
                // }





    
            })


        });
    }})       

        
let minuteIntervalId = setInterval(()=>{
    let date = new Date();
    let curyear = ""+date.getFullYear();
    let curmonth = ""+(date.getMonth()+1);
    let curday = ""+(date.getDate());
    let curhours = ""+date.getHours();
    let curmins = ""+date.getMinutes();
    console.log({year:curyear, month:curmonth, day:curday, hours:curhours, mins:curmins});
    let primaryKey = parseInt(curyear+curmonth+curday+curhours+curmins);
    alarmModel.find({primaryKey:primaryKey}, {user:1})
    .then((data)=>{
        let usernames = data.map((value)=>{
            return value.user;
        })
        if(usernames.length){
            console.log(usernames);
            console.log(usernameToSockId);
            console.log("Alert Alarm!");
            usernames.forEach((uname)=>{
                io.to(usernameToSockId[uname]).emit("alarm-from-server", "Alarm Alert");
            })
        }
    }).catch((e)=>{
        console.log(e);
    })
}, 60000)




app.get("/login", (req, res)=>{
    res.sendFile(__dirname+"/public/html/login.html")
})
app.post("/login", postLogin);


app.get("/signup", (req, res)=>{
    res.sendFile(__dirname+"/public/html/signup.html")
})
app.post("/signup", postUserSignup);

// app.get("/setAlarm", (req, res)=>{
//     console.log(req.query);
//     setTimeout(() => {
//         console.log("Alarm time's up for", req.query.u);
//     }, req.query.t);
//     res.redirect("/");
// })

app.post("/getAlarms", (req, res)=>{
    alarmModel.find({user:req.body.username})
    .then((data)=>{
        res.json(data);
    }).catch((e)=>{
        console.log(e);
    })
})

app.post("/deleteAlarm", (req, res)=>{
    console.log(req.body);
    alarmModel.deleteOne({user:req.body.username, primaryKey:req.body.primaryKey})
    .then((data)=>{
        console.log(data);
        res.json("deleted alarm");
    }).catch((e)=>{
        console.log(e);
    })
})

// app.post("/newAlarm", (req, res)=>{
//     let alarm = {}
//     io.on("connection", (socket)=>{
//         console.log("A new user connected", socket.id);
//         io.to(socket.id).emit("from-server", "To Id"+socket.id)
//         socket.on("from-client", (sockRes)=>{
//             console.log(sockRes);
//             let uname = sockRes.split("|")[0]
//             let data = JSON.parse(sockRes.split("|")[1])
//             console.log(data);
//             if(usernameToSockId.uname === undefined){
//                 usernameToSockId.uname = [socket.id]
//             }else{
//                 usernameToSockId.uname.push(socket.id);
//             }
//             let key = alarm.mins+alarm.secs+req.session.username;
//             map[key] = {}
//             // map[key].interval = setInterval(()=>{
//             //     let date = new Date();
//             //     let curyear = date.getFullYear();
//             //     let curmonth = date.getMonth()+1;
//             //     let curday = date.getDay()-1;
//             //     let curhours = date.getHours();
//             //     let curmins = date.getMinutes();
//             //     let cursecs = date.getSeconds();
//             //     console.log(curmins, cursecs);
//             //     if(alarm.year === curyear && alarm.month === curmonth && alarm.day===curday && alarm.hours === curhours && alarm.mins === curmins && alarm.secs === cursecs){
//             //         console.log("Alert Alarm");
//             //         clearInterval(map[key].interval);
//             //         //ADD SERVER TO PARTICULAR CLIENT ALERT
//             //         io.to(usernameToSockId.uname).emit("from-server", "To Id"+socket.id)
                    
//             //     }
//             // }, 1000)

//         })
//     });

    
    // res.redirect("/");
// })

server.listen(3000, ()=>{
    console.log("Server Ready!");
})