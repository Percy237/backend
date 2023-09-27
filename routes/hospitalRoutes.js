const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Get all hospitals" });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: "Create hospital" });
});

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
