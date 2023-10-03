const User = require("../models/User");
const userServices = require("../services/userService");

const create = async (req, res) => {
  try {
    if (req.body.email) {
      let data = { ...req.body, ...{ password: "fdfdfd" } };
      const user = await userServices.createUser(data);
      res.status(201).json({ data: user, message: "User hospital" });
    } else {
      res.status(422).json({ data: [], message: "All fields are required" });
    }
  } catch (error) {    
    res.status(500).json({ message: `An error occurred: ${error.message}` });
  }
};

const getAllUsers = async (req, res) => {
  let users = [];
  try {
    users = await userServices.getAllUsers();
    res.status(200).json({ data: users, message: "user Listing" });
  } catch (error) {
    res
      .status(200)
      .json({ data: [], message: `An error occurred: ${error.message}` });
  }
};

module.exports = {
  create,
  getAllUsers,
};
