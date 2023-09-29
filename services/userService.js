const User = require("../models/User");

const getUserByEmail = async (email) => {
  let user = await User.findOne(email);
  return user;
};

const createUser = async (data) => {
  const user = new User(data);
  return await user.save();
};

const getAllUsers = async () => {
  const user = await User.find();
  return user;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

module.exports = {
  getUserByEmail,
  createUser,
  getAllUsers,
  getUserById,
};
