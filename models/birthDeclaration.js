const mongoose = require("mongoose");
const { Schema } = mongoose;

const birthDeclarationSchema = new mongoose.Schema({
  name_of_child: {
    type: String,
    required: true,
  },
  child_dob: {
    type: String,
    required: true,
  },
  child_pob: {
    type: String,
    required: true,
  },
  child_sex: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
    required: true,
  },
  father_pob: {
    type: String,
    required: false,
  },
  father_dob: {
    type: String,
    required: true,
    unique: true,
  },
  father_resident_at: {
    type: String,
    required: true,
  },
  father_occupation: {
    type: String,
    required: true,
  },
  father_reference_document: {
    type: String,
    required: true,
  },
  mother_name: {
    type: String,
    required: true,
  },
  mother_pob: {
    type: String,
    required: false,
  },
  mother_dob: {
    type: String,
    required: true,
    unique: true,
  },
  mother_resident_at: {
    type: String,
    required: true,
  },
  mother_occupation: {
    type: String,
    required: true,
  },
  mother_reference_document: {
    type: String,
    required: true,
  },

  marriage_certificate: {
    type: String,
  },
  mariage_certificate_drawn_up_date: {
    type: String,
  },
  hospital_name: {
    type: String,
  },
  head_of_hospital: {
    type: String,
  },
  status: {
    type: String,
    default: "Uncomplete",
  },
});

module.exports = mongoose.model("BirthDeclaration", birthDeclarationSchema);
