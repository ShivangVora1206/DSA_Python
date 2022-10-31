const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    email:String,
    username:String,
    password:String,
    profile:String,
    role:String,
    isVerified:Boolean,
    cart:[{ productName: String, quantity: Number }]
}
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;