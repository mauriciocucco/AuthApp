const bcrypt = require("bcryptjs");

const validarPassword = (password, passwordHash) => {
  return bcrypt.compareSync(password, passwordHash);
};

module.exports = { validarPassword };
