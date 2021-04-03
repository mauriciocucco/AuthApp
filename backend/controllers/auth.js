const { response } = require("express");
const { createUser, findUser } = require("../models/usuario");
const { encriptarPassword } = require("../services/encriptarPassword");
const { validarPassword } = require("../services/validarPassword");
const { crearToken } = require("../services/crearToken");

const crearUsuario = async (req, res = response) => {
  try {
    const { name, email } = req.body;
    const password = encriptarPassword(req.body.password);

    await createUser({ name, email, password });

    return res.json({
      ok: true,
      msg: "Usuario creado",
    });
  } catch (error) {
    console.log(e);
    res.status(500).json({ ok: false, msg: "Error del servidor" });
  }
};

const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await findUser({ email });

    if (usuario) {
      const passwordValido = validarPassword(password, usuario.password);

      if (passwordValido) {
        const token = await crearToken({
          id: usuario._id,
          name: usuario.name,
          email: usuario.email,
        });

        res.json({
          ok: true,
          msg: "Bienvenido",
          token,
        });
      } else {
        res.status(401).json({
          ok: false,
          msg: "Password inválido",
        });
      }
    } else {
      res.status(401).json({
        ok: false,
        msg: "Email inválido",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      msg: "Error del servidor",
    });
  }
};

const renovarToken = async (req, res) => {
  try {
    const token = await crearToken({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });

    res.json({
      ok: true,
      msg: "Token renovado",
      name: req.user.name,
      email: req.user.email,
      id: req.user.id,
      token,
    });
  } catch (error) {
    console.log("Error renovarToken: ", error);
    res.status(500).json({
      ok: false,
      msg: "Error del servidor",
    });
  }
};

module.exports = { crearUsuario, loginUsuario, renovarToken };
