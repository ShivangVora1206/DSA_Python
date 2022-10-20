const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
    task: {

        data: String,
        status: Number
    },
    taskId: Number,
    author: String
}
);

const todoModel = mongoose.model("todos", todoSchema);

module.exports = todoModel;