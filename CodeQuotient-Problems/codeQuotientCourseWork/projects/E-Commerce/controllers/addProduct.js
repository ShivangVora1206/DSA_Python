const productModel = require("../database/models/products");

module.exports = function (request, response){
    console.log(request.body);
    let product = {
        productName : request.body.ProductName,
        productPrice : request.body.productPrice,
        productImage : request.file.filename,
        productDescription : request.body.productDesc
    }
    console.log(product);
    productModel.create(product).then((data)=>{
        console.log(data);
        response.redirect("/admin");
    }).catch((e)=>{
        console.log(e);
    })
}