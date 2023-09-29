const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/authMiddleware");

const secretaryController = require("../controller/secretaryController");

router.route("/").get(authMiddleware, secretaryController.getAll);

router.route("/").post(authMiddleware, secretaryController.create);

router.route("/:id").post((req, res) => {
  res.status(200).json({ message: `Get secretary for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update secretary for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `delete secretary for ${req.params.id}` });
});

module.exports = router;


 