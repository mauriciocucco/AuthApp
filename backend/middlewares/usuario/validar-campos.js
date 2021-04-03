const { validationResult } = require("express-validator");

const validarCampos = (req, res, next) => {
  const errors = validationResult(req);

  // //isEmpty() y mapped() son de express-validator
  if (!errors.isEmpty()) {
    return res.status(422).json({ ok: false, errors: errors.mapped() });
  } else {
    next();
  }
};

module.exports = { validarCampos };
