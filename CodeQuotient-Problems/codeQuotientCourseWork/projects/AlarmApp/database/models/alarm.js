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
    //add time field and add indexing to that field of type date
}
);

const alarmModel = mongoose.model("alarms", alarmSchema);

module.exports = alarmModel;