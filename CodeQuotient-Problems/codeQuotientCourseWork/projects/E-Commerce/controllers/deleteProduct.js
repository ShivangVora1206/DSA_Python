const productModel = require("../database/models/products");
module.exports = function (request, response){
    productModel.deleteOne({productName:request.body.productName})
    .then((data)=>{
        console.log(data);
        response.redirect("/admin");
    }).catch((e)=>{
        console.log(e);
    });
}