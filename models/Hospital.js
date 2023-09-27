const mongoose = require("mongoose");
const { Schema } = mongoose;

const hospitalSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
    unique: true,
  },
  division: {
    type: String,
    required: true,
  },
  sub_division: {
    type: String,
    required: false,
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

module.exports = mongoose.model("Hospital", hospitalSchema);
