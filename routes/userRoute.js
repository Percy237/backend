const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.route("/").get(userController.getAllUsers);

router.route("/").post(userController.create);

router.route("/:id").post((req, res) => {
  res.status(200).json({ message: `Get user for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update user for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `delete user for ${req.params.id}` });
});

module.exports = router;
