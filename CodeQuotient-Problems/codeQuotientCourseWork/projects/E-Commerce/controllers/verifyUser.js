const userModel = require("../database/models/user");

module.exports = function (request, response){
    console.log(request.query);
    userModel.updateOne({email:request.query.email}, {isVerified:true})
    .then((data)=>{
        console.log(data);
        response.redirect("/login");
    }).catch(()=>{
        console.log("error verifying");
        response.send("verification pending");
    })
}