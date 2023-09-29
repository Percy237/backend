const userService = require("./userService");
const { comparePassword } = require("../utils/helper");

const userLogin = async (email, password) => {
  let user = {};
  user = await userService.getUserByEmail({ email });
  if (user && comparePassword(password, user.password)) {
    return {
      validity: true,
      user: user,
    };
  } else {
    return {
      validity: false,
      user: user,
    };
  }
};

const userLogout = (data) => {};

module.exports = {
  userLogin,
  userLogout,
};
