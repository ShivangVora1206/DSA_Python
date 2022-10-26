const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    email:String,
    username:String,
    password:String,
    profile:String,
    isVerified:Boolean
}
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;