const userModel = require("../../database/models/user");


module.exports = function (email, productName, response){
    userModel.find({email:email})
    .then((data)=>{
        let cart = data[0].cart;
        let Index = 0;
        let match = cart.filter((value, index)=>{
            if(productName === value.productName){
                Index = index;
                return true;
            }
        })
        cart.splice(Index, 1);
        userModel.updateOne({email:email}, {cart:cart})
        .then((data)=>{
            console.log(data);
            console.log("Product added to cart");
            response.redirect("/viewCart");
        }).catch((e)=>{
            
            console.log("error updating to cart");
        })

    }).catch((e)=>{
        console.log(e);
        console.log('Error removing product from cart');
    })
}