const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    productName:String,
    productImage:String,
    productId:String,
    productPrice:String,
    productDescription:String
}
);

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;