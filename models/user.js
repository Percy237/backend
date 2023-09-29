const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
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
  matricule_number: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
