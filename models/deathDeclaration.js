const mongoose = require("mongoose");
const { Schema } = mongoose;

const deathDeclarationSchema = new mongoose.Schema({
  name_of_deceased: {
    type: String,
    required: true,
  },
  deceased_on: {
    type: String,
    required: true,
  },
  deceased_born_on: {
    type: String,
    required: true,
  },
  deceased_marital_status: {
    type: String,
    required: true,
  },
  deceased_occupation: {
    type: String,
    required: true,
  },
  deceased_parent_1: {
    type: String,
    required: false,
  },
  deceased_parent_2: {
    type: String,
    required: false,
  },

  declarant_name: {
    type: String,
    required: false,
  },

  declarant_occupation: {
    type: String,
    required: false,
  },

  declarant_relative: {
    type: String,
    required: false,
  },

  declarant_idCardNumber: {
    type: String,
    required: false,
  },

  witness_name_1: {
    type: String,
    required: false,
  },
  witness_occupation_1: {
    type: String,
    required: false,
  },
  witness_resident_at_1: {
    type: String,
    required: false,
  },
  witness_idCardNumber_at_1: {
    type: String,
    required: false,
  },
  witness_name_2: {
    type: String,
    required: false,
  },
  witness_occupation_2: {
    type: String,
    required: false,
  },
  witness_resident_at_2: {
    type: String,
    required: false,
  },
  witness_idCardNumber_at_2: {
    type: String,
    required: false,
  },
  declaration: {
    type: Schema.Types.ObjectId,
    ref: Declaration,
  },
});

module.exports = mongoose.model("DeathDeclaration", deathDeclarationSchema);
