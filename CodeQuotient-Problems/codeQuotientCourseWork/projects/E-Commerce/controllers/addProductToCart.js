const userModel = require("../database/models/user");

module.exports = function (request, response){
    if(!request.session.isLoggedIn){
        response.redirect("/login");
    }
    userModel.find({email:request.session.email})
    .then((data)=>{
        console.log(request.body);
        let cart = data[0].cart;
        let temp = cart.filter((value)=>{
            if(value.productName === request.body.productName){
                return true;
            }
        });
        if(temp.length){
            console.log("already in cart");
            response.redirect("/");
        }
        else{

            // cart.push({productName:request.body.productName, quantity:1});
            userModel.updateOne({email:request.session.email}, {$push :{cart:{productName:request.body.productName, quantity:1}}})
            .then((data)=>{
                console.log(data);
                console.log("Product added to cart");
                response.redirect("/");
            }).catch((e)=>{
                console.log("error updating to cart");
            })
        }

    }).catch((e)=>{
        console.log('Error adding product to cart');
    })
}