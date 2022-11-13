const mongoose = require("mongoose");
const { Schema } = mongoose;

const conversationSchema = new Schema({
    from : String,
    timestamp : Date,
    groupid : String,
    message : String
}
);

const conversationModel = mongoose.model("conversation", conversationSchema);

module.exports = conversationModel;