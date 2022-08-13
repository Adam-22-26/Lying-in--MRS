const mongoose = require("mongoose");

const note_schema = new mongoose.Schema({
  title: { type: String },
  body: { type: String },
  user_id: { type: String },
  privacy: { type: String },
  date: { type: String },
  status: { type: Boolean },
});
module.exports = note_schema
