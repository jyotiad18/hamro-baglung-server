const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

/* call routers */
const indexRoute = require("./routes/index");

/* call sequalize */
//const sequelize = require("./db/squalizeconfig");

/* app uses */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(cors());
app.use(compression());
app.use(helmet()); // for http.header

//route
app.use("/api/", indexRoute);

module.exports = app;