const userModel = require("../database/models/user");
const sendMail = require("../services/mail/sendMail.js");
const hashPassword = require("../services/user/hashPassword");


module.exports = function(request, response){
    console.log(request.body);
    let user = {
        email : request.body.email,
        username : request.body.username,
        password : hashPassword(request.body.password),
        profile : request.file.filename,
        role : request.body.role,
        isVerified : false,
        cart : []
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