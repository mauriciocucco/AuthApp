const jwt = require("jsonwebtoken");
const { jwtClave } = require("../config/config");
const signOptions = { expiresIn: "12h" };

const crearToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, jwtClave, signOptions, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};

module.exports = { crearToken };
