const birthDeclarationServices = require("../services/birthDeclration");

const create = async (req, res) => {
  try {
    const birthDeclaration =
      await birthDeclarationServices.createBirthDeclaration(data);
    res
      .status(201)
      .json({ data: birthDeclaration, message: "Birth declaration created" });
  } catch (error) {
    res.status(500).json({ message: `An error occurred: ${error.message}` });
  }
};

const getAll = async (req, res) => {
  let birthDeclarations = [];
  try {
    birthDeclarations =
      await birthDeclarationServices.getAllBirthDeclarations();
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
  getAll,
  create,
};
