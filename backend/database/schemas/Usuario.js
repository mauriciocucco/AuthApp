const mongoose = require("../../config/db");

const usuarioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Usuarios = mongoose.model("Usuarios", usuarioSchema);

module.exports = Usuarios;
