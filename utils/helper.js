const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10); // saltRounds: number of rounds to use for hashing the password; default is
};

const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

const generateJWTToken = (userId) => {
  const token = jwt.sign({ id: userId }, config.secret, {
    algorithm: "HS256",
    allowInsecureKeySizes: true,
    expiresIn: 86400,
  });
  return token;
};

const verifyJWTToken = (token) => {
  return jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return false;
    }
    return decoded;
  });
};

const destroyJWTToken = (token) => {
  return "";
};

module.exports = {
  hashPassword,
  comparePassword,
  generateJWTToken,
  verifyJWTToken,
};
