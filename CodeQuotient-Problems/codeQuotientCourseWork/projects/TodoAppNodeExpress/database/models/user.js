const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username:String,
    password:String,
    profile:String
}
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;