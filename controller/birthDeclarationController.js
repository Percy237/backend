const birthDeclaration = require("../models/birthDeclaration");
const birthDeclarationServices = require("../services/birthDeclaration");

const create = async (req, res) => {
  try {
    let data = { ...req.body };
    const birthDeclaration =
      await birthDeclarationServices.createBirthDeclaration(data);
    res
      .status(201)
      .json({ data: birthDeclaration, message: "Created birth declaration" });
  } catch (error) {
    res.status(500).json({ message: `An error occurred: ${error.message}` });
  }
};

const getAll = async (req, res) => {
  let birthDeclarations = [];
  try {
    birthDeclarations = await birthDeclarationServices.getAll();
    res
      .status(200)
      .json({ data: birthDeclarations, message: "Birth Declaration Listing" });
  } catch (error) {
    res
      .status(200)
      .json({ data: [], message: `An error occurred: ${error.message}` });
  }
};

module.exports = {
  create,
  getAll,
};
