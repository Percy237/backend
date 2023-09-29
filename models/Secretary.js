const mongoose = require("mongoose");
const { Schema } = mongoose;

const secretarySchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  council: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Secretary", secretarySchema);
