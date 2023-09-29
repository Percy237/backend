const mongoose = require("mongoose");
const { Schema } = mongoose;

const superAdminSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("SuperAdmin", superAdminSchema);
