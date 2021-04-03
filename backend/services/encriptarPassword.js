const bcrypt = require("bcryptjs");

const encriptarPassword = (password) => {
  const salt = bcrypt.genSaltSync();

  return (passwordEncriptado = bcrypt.hashSync(password, salt));
};

module.exports = { encriptarPassword };
