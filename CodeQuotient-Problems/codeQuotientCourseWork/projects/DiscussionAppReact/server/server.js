const express = require("express")
const cors = require("cors");
const moment = require('moment');
app = express()
const http = require("http");
const {Server} = require("socket.io");
const startDB = require("./database/init");
const userDataModel = require("./database/userDataModel");
const userModel = require("./database/userModel");
const cookieParser = require("cookie-parser");
const groupModel = require("./database/groupModel");
const conversationModel = require("./database/conversationModel");
const server = http.createServer(app);
const io = new Server(server, {
    cors:{origin:"http://127.0.0.1:3000", methods:["GET", "POST"],
            origin:"http://localhost:3000", methods:['GET', 'POST']}
})
startDB();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

io.on("connection", socket => {
    console.log("New connection")

    socket.on("from-client", m =>{
        console.log(m);
    })
    socket.emit("from-server", "From server");

    socket.on("contact-pressed", m =>{
        console.log(m);
    })

    socket.on("new-chat-from-client", m=>{
        console.log(m);
        let group = JSON.parse(m).groupid;
        console.log(group);
        socket.broadcast.to(group).emit("new-chat-from-server", m);
    })

    socket.on("join", m =>{
        socket.join(m);
        console.log("Joined ", m);
    })
})

app.get("/adduser", (req, res)=>{
    res.sendFile(__dirname+"/adduser.html");
})

app.post("/addUser", async (req, res)=>{
    try{

        
        let data = await userModel.create({
            username:req.body.username,
            password:req.body.passowrd,
            isVerified:false
        })
        console.log(data);
        let data2 = await userDataModel.create({
            email:req.body.email,
            profilepic:req.body.profile,
            phone:req.body.phone,
            userid:data._id
        })
        console.log(data2);
        res.redirect("/adduser");
        
    }
    catch(e){
        console.log(e);
    }
})

app.get("/addgroup", (req, res)=>{
    res.sendFile(__dirname+"/addgroup.html")
})

app.post("/addgroup", async (req, res)=>{
    let data = await groupModel.create({
        name:req.body.groupname,
        participants:[req.body.participant1, req.body.participant2]
    });
    console.log(data);
    res.redirect("/addgroup");
})

app.post("/getcontacts", async (req, res)=>{
    let data = await groupModel.find({participants:req.body.username});
    console.log(data);
    res.json(data);
})

app.post("/addconversation", async (req, res)=>{
    
    // let timestamp = moment().format("YYYY-MM-DD HH:mm:ss")
    console.log(moment().utc(true));

    console.log(req.body);
    let data = await conversationModel.create({
        from:req.body.from,
        message:req.body.message,
        groupid:req.body.groupid,
        timestamp:moment().utc(true)

    })
    console.log(data);

})

app.post("/getconversation", async (req, res)=>{
    console.log(req.body);
    let data = await conversationModel.find({groupid:req.body.groupid});
    console.log("getconvo",data);
    res.json(data);
})

server.listen(8000, () => {
    console.log("Started!")
})