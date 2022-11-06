module.exports = function (request, response){
    request.session.destroy((err)=>{
        if(err){
            console.log("Error destroying session");
        }else{
            console.log("Session Destroy");
            response.redirect("/login");
        }
    })
}