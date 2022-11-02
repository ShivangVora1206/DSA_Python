const userModel = require("../database/models/user");

module.exports = function (request, response){
    if(!request.session.isLoggedIn){
        response.redirect("/login");
    }
    userModel.find({email:request.session.email})
    .then((data)=>{
        console.log(request.body);
        let cart = JSON.parse(JSON.stringify(data[0].cart));
        let Index = 0;
        let match = cart.filter((value, index)=>{
            if(value.productName === request.body.productName){
                Index = index;
                return true;
            }
        });
        let curCount = match[0].quantity;
        cart[Index].quantity = curCount+1;
        userModel.updateOne({email:request.session.email}, {cart:cart})
        .then((data)=>{
            console.log(data);
            console.log("Product count updated to cart");
            response.redirect("/viewCart");
        }).catch((e)=>{
            console.log("error updating to cart");
        })

    }).catch((e)=>{
        console.log(e);
        console.log('Error adding product to cart');
    })
}