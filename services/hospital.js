const Hospital = require("../models/Hospital");

const createHospital = async (data) => {
  const hospital = new Hospital(data);
  await hospital.save();
};

const getAll = async () => {
  const hospital = await Hospital.find().populate("user");
  return hospital;
};
module.exports = { createHospital, getAll };
