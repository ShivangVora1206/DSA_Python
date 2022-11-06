const userModel = require("../database/models/user");
const hashPassword = require("../services/user/hashPassword");


module.exports = function(request, response){
    console.log(request.body);
    let user = {
        email : request.body.email,
        username : request.body.username,
        password : hashPassword(request.body.password),
        alarms : []
    }
        userModel.create(user).then(()=>{
            response.redirect("/login");
        }).catch((e)=>{
        console.log(e);
        response.redirect("/signup");
    })
}