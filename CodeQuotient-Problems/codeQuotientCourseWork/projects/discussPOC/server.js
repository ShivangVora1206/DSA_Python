const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.get("/2", (req, res)=>{
    res.sendFile(__dirname+"/index2.html")
})

io.on('connect', (socket) => {
    console.log("New user connected");

    socket.on("handshake", (message)=>{
        console.log(message);
        // socket.join("Group1");
        io.emit("from-server", "handshake received");
    })

    socket.on("join", (m)=>{
        console.log("joined g"+m);
        socket.join("g"+m);
    })

    socket.on("form-message", (message)=>{
        console.log(message);
        console.log(socket.request.headers.cookie);
        io.to("g"+message[0]).emit("message", JSON.stringify(socket.request.headers.cookie+"cookie"));
    })
})

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));