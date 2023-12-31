const express = require("express");
const router = express.Router();

const hospitalController = require("../controller/hospitalController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.route("/").get(authMiddleware, hospitalController.getAll);

router.route("/").post(authMiddleware, hospitalController.create);

router.route("/:id").post((req, res) => {
  res.status(200).json({ message: `Get hospital for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update hospital for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `delete hospital for ${req.params.id}` });
});

module.exports = router;
