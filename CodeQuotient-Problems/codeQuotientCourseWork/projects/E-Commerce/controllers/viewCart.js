const productModel = require("../database/models/products");
const userModel = require("../database/models/user");

module.exports = function (request, response){
    if(!request.session.isLoggedIn){
        response.redirect("/login");
    }
    userModel.find({email:request.session.email})
    .then((data)=>{
        let cart = data[0].cart;
        let names = [];
        let dict = {};
        for(var i=0;i<cart.length;i++){
            names.push(cart[i].productName);
            dict[cart[i].productName] = cart[i].quantity;
        }
        productModel.find({ "productName":{$in:names}})
        .then((data)=>{
            let newData = JSON.parse(JSON.stringify(data));
            for(var j=0;j<newData.length;j++){
                newData[j].count = dict[newData[j].productName];
                console.log(newData[j]);
            }
            response.render("userCart", {username:request.session.username, profile:request.session.profile, products:newData});
        }).catch((e)=>{
            console.log(e);
        })
    }).catch((e)=>{
        console.log(e);
    })
}