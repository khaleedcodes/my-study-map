const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Event", EventSchema);
