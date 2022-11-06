const mongoose = require("mongoose");
const { Schema } = mongoose;

const alarmSchema = new Schema({
    year:String,
    month:String,
    day:String,
    hours:String,
    mins:String,
    user:String,
    primaryKey:Number
}
);

const alarmModel = mongoose.model("alarms", alarmSchema);

module.exports = alarmModel;