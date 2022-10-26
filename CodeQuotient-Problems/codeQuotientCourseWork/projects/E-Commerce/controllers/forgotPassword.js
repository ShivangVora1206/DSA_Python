const userModel = require("../database/models/user");
module.exports = function (request, response){
    userModel.updateOne({username:request.body.username, email:request.session.email}, {password:request.body.newpassword})
    .then((data)=>{
        console.log("Password changed successfully");
        response.redirect("/login");
    }).catch((e)=>{
        console.log("error changing password");
        response.redirect("/forgotPassword");
    })
}