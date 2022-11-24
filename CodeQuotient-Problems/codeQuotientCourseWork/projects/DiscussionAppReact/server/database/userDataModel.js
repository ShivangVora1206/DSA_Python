const mongoose = require("mongoose");
const { Schema } = mongoose;

const userDataSchema = new Schema({
    email:String,
    userid:String,
    phone:String,
    profilepic:String,
    username:String

}
);

const userDataModel = mongoose.model("userData", userDataSchema);

module.exports = userDataModel;