const express = require("express");
const router = express.Router();

const birthDeclarationController = require("../controller/birthDeclarationController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.route("/").get(authMiddleware, birthDeclarationController.getAll);

router.route("/").post(authMiddleware, birthDeclarationController.create);

router.route("/:id").post((req, res) => {
  res
    .status(200)
    .json({ message: `Get birth declaration for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res
    .status(200)
    .json({ message: `Update birth declaration  for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res
    .status(200)
    .json({ message: `delete birth declaration  for ${req.params.id}` });
});

module.exports = router;
