const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username:String,
    password:String,
    isVerified:Boolean

}
);

const userModel = mongoose.model("userCreds", userSchema);

module.exports = userModel;