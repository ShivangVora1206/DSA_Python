const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    email:String,
    username:String,
    password:String,
    //store only ids 
    alarms:[{ year: String, month:String, day:String, hours: String, mins:String }]
}
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;