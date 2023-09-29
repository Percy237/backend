const authService = require("../services/authService");
const { generateJWTToken } = require("../utils/helper");

const login = async (req, res) => {
  try {
    let userCredentialValidity = await authService.userLogin(
      req.body.email,
      req.body.password
    );
    if (userCredentialValidity.validity) {
      const token = generateJWTToken(userCredentialValidity.user._id);
      const { password, __v, ...user } = userCredentialValidity.user._doc;
      let responseUser = { ...user, token };
      res.status(200).json({ data: {user:responseUser, token: token}, message: "Login successful" });
    } else {
      res.status(422).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  res.status(200).json({ message: "logout successful" });
};

module.exports = {
  login,
  logout,
};
