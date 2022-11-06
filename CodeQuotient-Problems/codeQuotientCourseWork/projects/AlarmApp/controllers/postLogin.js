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
                if(user[0]){
                    request.session.email = user[0].email;
                    request.session.username = user[0].username;
                    request.session.isLoggedIn = true;

                        response.redirect("/");

                    }
                }
        }
    }
)}