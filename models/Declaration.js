const mongoose = require("mongoose");
const { Schema } = mongoose;

const declarationSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  hospital_name: {
    type: String,
    required: true,
  },
  head_of_hospital: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Declaration", declarationSchema);
