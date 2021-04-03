const mongoose = require("mongoose");
const { host, passwordDB, cluster, database } = require("./config");

mongoose.connect(`mongodb+srv://${host}:${passwordDB}@${cluster}/${database}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Conectado a la base de datos!!"));

module.exports = mongoose;
