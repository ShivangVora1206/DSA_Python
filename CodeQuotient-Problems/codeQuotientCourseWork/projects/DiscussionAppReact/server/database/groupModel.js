const mongoose = require("mongoose");
const { Schema } = mongoose;

const groupSchema = new Schema({
    name : String, 
    participants : [String]
}
);

const groupModel = mongoose.model("group", groupSchema);

module.exports = groupModel;