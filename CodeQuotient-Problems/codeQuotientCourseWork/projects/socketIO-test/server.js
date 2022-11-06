const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

usernameToSockId = {}

app.get('/', (request, response) => {
  response.sendFile(__dirname+"/index.html");
});

app.get("/connect", (request, response)=>{
    io.on("connection", (socket)=>{
        console.log("A new user connected", socket.id);
        io.to(socket.id).emit("from-server", "To Id"+socket.id)
        socket.on("from-client", (res)=>{
            console.log(res);
            let uname = res.split("|")[1]
            let data = res.split("|")[0]
            if(usernameToSockId.uname === undefined){
                usernameToSockId.uname = [socket.id]
            }else{
                usernameToSockId.uname.push(socket.id);
            }
            io.to(usernameToSockId.uname).emit("from-server", "To Id"+socket.id+data)
            // socket.emit("from-server", res+"Emit");
            // socket.broadcast.emit("from-server", res+"broadcast");
        })
        // setInterval(()=>{
    
        //     socket.emit("from-server",  Date.now());
        // }, 1000);
    })
    response.sendFile(__dirname+"/index.html");
})



server.listen(3000, () => {
  console.log('listening on *:3000');
});