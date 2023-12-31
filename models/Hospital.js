const mongoose = require("mongoose");
const { Schema } = mongoose;

const hospitalSchema = new mongoose.Schema({
  hospital_name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Hospital", hospitalSchema);
