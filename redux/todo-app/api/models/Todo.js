const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title."],
  },
  completed: {
    type: Boolean,
    required: [true, "Please provide a status information."],
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
