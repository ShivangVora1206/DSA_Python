productModel = require("../../database/models/products");

module.exports = function (limit, callback) {
    productModel.find({}).limit(limit)
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