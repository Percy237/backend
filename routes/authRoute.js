const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const {authMiddleware} = require("../middleware/authMiddleware");

router.route("/login").post(authController.login);
router.route("/logout").post(authMiddleware, authController.logout);

module.exports = router;
