const userModel = require("../database/models/user");
const sendMail = require("../services/mail/sendMail.js");
module.exports = function(request, response){
    let user = {
        email : request.body.email,
        username : request.body.username,
        password : request.body.password,
        profile : request.file.filename,
        isVerified : false
    }
        userModel.create(user).then(()=>{
        sendMail.sendMail(
            [{
                Email:user.email,
                Name:user.username
            }], 
            "E-Commerce Account Verification", 
            `<h2>Hello ${user.username} !</h2>
            <p>Here's a quick step to verify your new account.</p>
            <a href="http://127.0.0.1:3000/verify?email=${user.email}">Verify Account</a>`)
        .then((data)=>{
            console.log(data);
            response.redirect("/postSignup");
        }).catch((e)=>{
            console.log(e);
            console.log("error sending mail");
        })
    }).catch((e)=>{
        console.log(e);
        response.redirect("/signup");
    })
}