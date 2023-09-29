const secretary = require("../models/Secretary");
const secretaryServices = require("../services/secretary");
const userService = require("../services/userService");
const { hashPassword } = require("../utils/helper");

const create = async (req, res) => {
  try {
    if (req.body.email) {
      let email = req.body.email;
      let password = hashPassword("@Tsembompercy123");
      let region = req.body.region;
      let phone_number = req.body.phone_number;
      let division = req.body.division;
      let sub_division = req.body.sub_division;
      let matricule_number = req.body.matricule_number;
      let name = req.body.name;
      let role = "secretary";
      let council = req.body.council;

      let userData = {
        email,
        password,
        region,
        phone_number,
        division,
        sub_division,
        matricule_number,
        name,
        role,
      };

      let secretaryData = {
        council,
      };

      let createdUser = await userService.createUser(userData);

      let user = createdUser._id;

      let data = { ...req.body, user };
      const secretary = await secretaryServices.createSecretary(data);
      res.status(201).json({ data: secretary, message: "Secretary created" });
    } else {
      res.status(422).json({ data: [], message: "All fields are required" });
    }
  } catch (error) {
    res.status(500).json({ message: `An error occurred: ${error.message}` });
  }
};

const getAll = async (req, res) => {
  let secretaries = [];
  try {
    secretaries = await secretaryServices.getAll();
    res.status(200).json({ data: secretaries, message: "Secretary Listing" });
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
