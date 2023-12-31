const Hospital = require("../models/Hospital");
const hospitalServices = require("../services/hospital");
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
      let hospital_name = req.body.hospital_name;
      let type = req.body.type;
      let role = "hospital";

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

      let hospitalData = {
        email,
        password,
        region,
        phone_number,
        division,
        sub_division,
        hospital_name,
        type,
      };
      let createdUser = await userService.createUser(userData);

      let user = createdUser._id;

      let data = { ...req.body, user };
      const hospital = await hospitalServices.createHospital(data);
      res.status(201).json({ data: hospital, message: "Created hospital" });
    } else {
      res.status(422).json({ data: [], message: "All fields are required" });
    }
  } catch (error) {
    res.status(500).json({ message: `An error occurred: ${error.message}` });
  }
};

const getAll = async (req, res) => {
  let hospitals = [];
  try {
    hospitals = await hospitalServices.getAll();
    res.status(200).json({ data: hospitals, message: "Hospital Listing" });
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
