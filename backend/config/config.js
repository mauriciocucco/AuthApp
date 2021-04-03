require("dotenv").config();

const port = process.env.PORT;
const host = process.env.HOST;
const passwordDB = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const database = process.env.DATABASE;
const jwtClave = process.env.TKS;

module.exports = {
  port,
  host,
  passwordDB,
  cluster,
  database,
  jwtClave,
};
