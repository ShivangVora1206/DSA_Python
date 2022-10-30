const getAllProducts = require("../services/product/getAllProducts");
module.exports = function (request, response){
    // if(!request.session.isLoggedIn){
    //     response.redirect("/login");
    // }
    getAllProducts((err, data)=>{
        if(err){
            console.log("Error getting products");
        }else{
            console.log(request.body);
            let curCount = parseInt(request.body.lastCount) + 5;
            data = data.slice(0, curCount);
            // console.log(data.length);
            response.render("index", {username:request.session.username, products:data, curCount:curCount, profile:request.session.profile});
        }
    })
    
}