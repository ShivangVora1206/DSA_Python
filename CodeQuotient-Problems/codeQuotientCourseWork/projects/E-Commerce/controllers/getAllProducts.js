const getAllProducts = require("../services/product/getAllProducts");
module.exports = function (request, response){
    getAllProducts(5, (err, data)=>{
        if(err){
            console.log("Error getting products");
        }else{
            // let curCount = 5;
            // data = data.slice(0, curCount);
            // // console.log(request);
            response.render("index", {curCount:5, username:request.session.username, products:data, profile:request.session.profile, email:request.session.email});
        }
    })
}