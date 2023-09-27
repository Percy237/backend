const Hospital = require("../models/Hospital");
const hospitalServices = require("../services/hospital");

const create = async (req, res) => {
  try {
    if (req.body.email) {
      let data = { ...req.body, ...{ password: "fdfdfd" } };
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
