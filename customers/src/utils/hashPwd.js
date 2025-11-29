const bcrypt = require("bcrypt");

const hashPwd = async (pwd) => {
  return await bcrypt.hash(pwd, 10);
};

module.exports = { hashPwd };
