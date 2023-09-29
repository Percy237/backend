const BirthDeclaration = require("../models/birthDeclaration");

const createBirthDeclaration = async (data) => {
  const birthDeclaration = new BirthDeclaration(data);
  return await birthDeclaration.save();
};

const getAllBirthDeclarations = async () => {
  const birthDeclaration = await BirthDeclaration.find();
  return birthDeclaration;
};

module.exports = {
  createBirthDeclaration,
  getAllBirthDeclarations,
};
