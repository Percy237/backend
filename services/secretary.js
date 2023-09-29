const Secretary = require("../models/Secretary.js");

const createSecretary = async (data) => {
  const secretary = new Secretary(data);
  await secretary.save();
};

const getAll = async () => {
  const secretary = await Secretary.find().populate("user");
  return secretary;
};

const getSecretaryByUserId = async (user) => {
  const secretary = await Secretary.findOne({user}).populate("user");
  return secretary;
};

module.exports = { createSecretary, getAll, getSecretaryByUserId };
