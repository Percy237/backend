const Declaration = require("../models/Declaration");

const createDeclaration = async (data) => {
  const declaration = new Declaration(data);
  return await declaration.save();
};

const getAllDeclarations = async () => {
  const declaration = await Declaration.find();
  return declaration;
};

module.exports = {
  createDeclaration,
  getAllDeclarations,
};
