const mongoose = require("mongoose");
const { Schema } = mongoose;

const certificateSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  civil_registrar: {
    type: Schema.Types.ObjectId,
    ref: CivilRegistrar,
  },
});

module.exports = mongoose.model("Certificate", certificateSchema);
