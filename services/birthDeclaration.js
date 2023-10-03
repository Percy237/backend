const BirthDeclaration = require("../models/birthDeclaration");

const createBirthDeclaration = async (data) => {
  const birthDeclaration = new BirthDeclaration(data);
  await birthDeclaration.save();
};

const getAll = async () => {
  const birthDeclaration = await BirthDeclaration.find();
  return birthDeclaration;
};
module.exports = { createBirthDeclaration, getAll };
