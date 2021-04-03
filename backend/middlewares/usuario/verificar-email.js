const { findUser } = require("../../models/usuario");

const verificarEmail = (req, res, next) =>
  findUser({ email: req.body.email })
    .then((usuario) => {
      if (usuario) {
        return res
          .status(404)
          .json({ ok: false, msg: "Ya existe este email en la base de datos" });
      } else {
        next();
      }
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ ok: false, msg: "Error del servidor" });
    });

module.exports = { verificarEmail };
