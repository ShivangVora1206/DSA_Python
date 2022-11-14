const express = require("express")
const cors = require("cors");
const moment = require('moment');
const multer = require('multer');
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
const io = new Server(server,{
    cors:{origin:"http://127.0.0.1:3000", methods:["GET", "POST"],
            origin:"http://localhost:3000", methods:['GET', 'POST']},
    
})
startDB();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
var storage = multer.diskStorage({
    destination: 'public/',
    filename: function(req, file, callback) {
    callback(null, file.originalname);
    }
    });

var upload = multer({ storage: storage });

io.on("connection", socket => {

    console.log("New connection")
    console.log(socket.request.headers);

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
            password:req.body.password,
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


app.post("/login", async (req, res)=>{
    console.log(req.body);
    let data = await userModel.find({username:req.body.username, password:req.body.password})
    if(data.length){
        res.cookie("sid", "0000");
        res.json({status:200});
    }else{
        res.json({status:404});
    }
})

app.post("/signup", upload.single('file'), async (req, res)=>{
    console.log(req.body);
    try{

        
        let data = await userModel.create({
            username:req.body.username,
            password:req.body.password,
            isVerified:false
        })
        console.log(data);
        let data2 = await userDataModel.create({
            email:req.body.email,
            profilepic:req.body.fileName,
            phone:req.body.phone,
            userid:data._id
        })
        console.log(data2);
        ;
        
    }
    catch(e){
        console.log(e);
    }
    res.json("singup recv");
})    

app.post("/getUserProfile", async (req, res)=>{
    let data = await userModel.find({username:req.body.username});
    var userid = data[0]._id;
    console.log(userid.toString());
    let data2 = await userDataModel.find({userid:userid.toString()}, {profilepic:1});
    console.log(data2);
    res.json({profile:data2[0].profilepic});
})

server.listen(8000, () => {
    console.log("Started!")
})