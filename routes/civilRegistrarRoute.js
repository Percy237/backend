const express = require("express");
const router = express.Router();


const civilRegistrarController = require("../controller/civilRegistrarController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.route("/").get(authMiddleware, civilRegistrarController.getAll);

router.route("/").post(authMiddleware, civilRegistrarController.create);

router.route("/:id").post((req, res) => {
  res.status(200).json({ message: `Get civil registrar for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res
    .status(200)
    .json({ message: `Update civil registrar for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res
    .status(200)
    .json({ message: `delete civil registrar for ${req.params.id}` });
});

module.exports = router;
