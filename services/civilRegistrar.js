const CivilRegistrar = require("../models/CivilRegistrar");

const createCivilRegistrar = async (data) => {
  const civilRegistrar = new CivilRegistrar(data);
  await civilRegistrar.save();
};

const getAll = async () => {
  const civilRegistrar = await CivilRegistrar.find().populate("user");
  return civilRegistrar;
};
module.exports = { createCivilRegistrar, getAll };
