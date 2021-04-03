const Usuarios = require("../database/schemas/Usuario");

const createUser = async (obj) => {
  try {
    const nuevoUsuario = new Usuarios(obj);

    const { _id } = await nuevoUsuario.save();

    return _id;
  } catch (error) {
    throw error;
  }
};

const findUser = (obj) =>
  Usuarios.findOne(obj)
    .then((r) => r)
    .catch((e) => {
      throw e;
    });

module.exports = { createUser, findUser };
