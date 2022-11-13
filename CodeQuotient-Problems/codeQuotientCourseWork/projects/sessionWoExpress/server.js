
let express = require('express');
let cookieParser = require('cookie-parser');
let app = express()
let sessionStore = {}
let sid = 0;
app.use(cookieParser());

function sessionize(req, res, next){
    console.log(req.cookies);
    if(req.cookies.SessionID === undefined){
        res.cookie("SessionID", sid, {maxAge: 30000});
        sessionStore[sid] = {}
        sid++;
        res.redirect("/");
    }
    next();
} 

app.get('/', sessionize,  (req, res)=>{
    console.log(sessionStore);
    console.log(sessionStore[req.cookies.SessionID]);
    sessionStore[req.cookies.SessionID].data = "newData";
    res.send(sessionStore[req.cookies.SessionID]);
});

// res.cookie("userData", users);

//server listens to port 3000
app.listen(3000, (err)=>{
if(err)
throw err;
console.log('listening on port 3000');
});