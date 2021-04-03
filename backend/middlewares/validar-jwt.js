const jwt = require("jsonwebtoken");
const { jwtClave } = require("../config/config");

const validarJwt = (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: "false",
      msg: "Error en el token",
    });
  }

  try {
    const { id, name, email } = jwt.verify(token, jwtClave);

    req.user = { id, name, email };

    next();
  } catch (error) {
    console.log("Token error: ", error);
    return res.status(401).json({
      ok: "false",
      msg: "Token inválido",
    });
  }
};

module.exports = { validarJwt };
