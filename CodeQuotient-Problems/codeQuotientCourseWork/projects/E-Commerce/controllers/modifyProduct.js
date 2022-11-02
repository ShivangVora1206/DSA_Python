const productModel = require("../database/models/products");

module.exports = function (request, response){
    console.log(request.body);
    productModel.updateOne({_id : request.body.productId}, {productName:request.body.productName, productPrice:request.body.productPrice, productDescription:request.body.productDesc})
    .then((data)=>{
        console.log(data);
        response.redirect("/admin");
    }).catch((e)=>{
        console.log(e);
    })
}