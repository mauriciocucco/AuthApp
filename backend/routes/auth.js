const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  renovarToken,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/usuario/validar-campos");
const { verificarEmail } = require("../middlewares/usuario/verificar-email");
const { validarJwt } = require("../middlewares/validar-jwt");
const router = Router();

router.post(
  "/register",
  [
    check("name", "Ingrese su nombre").not().isEmpty(),
    check("email", "Ingrese un email válido").not().isEmpty().isEmail(),
    check("password", "El password debe tener 5 caracteres como mínimo")
      .not()
      .isEmpty()
      .isLength({ min: 5 }),
    validarCampos,
    verificarEmail,
  ],
  crearUsuario
);

router.post(
  "/login",
  [
    check("email", "Ingrese un email válido").isEmail(),
    check(
      "password",
      "El password debe tener 5 caracteres como mínimo"
    ).isLength({ min: 5 }),
    validarCampos,
  ],
  loginUsuario
);

router.get("/renew", validarJwt, renovarToken);

module.exports = router;
