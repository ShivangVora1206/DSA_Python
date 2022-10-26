productModel = require("../../database/models/products");

module.exports = function (callback) {
    productModel.find({})
    .then((data)=>{

        if(data.length){
            callback(false, data);
        }

    }).catch((e)=>{
        console.log(e);
        console.log("error getting data from db");
        callback(true);
    });
}