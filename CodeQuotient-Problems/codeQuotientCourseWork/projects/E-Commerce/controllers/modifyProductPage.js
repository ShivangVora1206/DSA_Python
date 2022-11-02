const productModel = require("../database/models/products");

module.exports = function (request, response){
    productModel.find({productName:request.body.productName})
    .then((data)=>{
        console.log(data);
        response.render("modifyProductPage", {product:data});
    }).catch((e)=>{
        console.log(e);
    })
}