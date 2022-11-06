const getUserData = require("../services/user/getUserData");
module.exports = function (request, response){
    getUserData(request.body, (err, data)=>{
        if(err){
            console.log("Error Logging In");
            response.redirect("/login");
        }else{

            let user = data;
            console.log(user);
            if(user.length){
                if(user[0].isVerified){
                    request.session.email = user[0].email;
                    request.session.username = user[0].username;
                    request.session.isLoggedIn = true;
                    request.session.profile = user[0].profile;
                    if(request.body.role === "admin" && user[0].role === "admin"){

                        response.redirect("/admin");

                    }else{

                        response.redirect("/login");
                    }
                    if(request.body.role ===  user[0].role){

                        response.redirect("/");

                    }else{

                        response.redirect("/login");
                    }
                }else{
                    response.redirect("/login");
                }
            }else{
                response.redirect("/login");
            }
    }
    })
}