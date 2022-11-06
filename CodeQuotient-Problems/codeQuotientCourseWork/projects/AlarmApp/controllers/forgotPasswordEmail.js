const sendEmail = require("../services/mail/sendMail");
module.exports = function (request, response){
    sendEmail.sendMail(
        [{
            Email:request.body.email,
            Name:"Forgotten user"
        }], 
        "Ecommerce Change Password",
        `<h2>Ecommerce Forgot Password</h2> 
        <p>Click the link below to change your account password.</p>
            <a href="http://127.0.0.1:3000/forgotPassword?email=${request.body.email}">Change Password</a>`
        ).then((data)=>{

            console.log(data);
        }).catch((e)=>{
            console.log(e);
        })
        response.redirect("/forgotPasswordEmailSent");
    }