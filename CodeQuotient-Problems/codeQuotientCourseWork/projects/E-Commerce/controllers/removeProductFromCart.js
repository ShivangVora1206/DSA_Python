const removeProductFromCart = require("../services/product/removeProductFromCart");


module.exports = function (request, response){
    if(!request.session.isLoggedIn){
        response.redirect("/login");
    }
    removeProductFromCart(request.session.email, request.body.productName, response);
}