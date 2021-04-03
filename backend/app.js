const express = require("express");
const router = require("./routes/auth");
const app = express();
const cors = require("cors");
const path = require("path");
const { port } = require("./config/config");

//directorio público donde voy a poner mi aplicación de Angular
app.use(express.static("public"));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", router);

app.listen(port, () => console.log(`SERVER UP ON PORT ${port}!!`));
