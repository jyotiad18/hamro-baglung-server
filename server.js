const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

/* call routers */
const userTypesRoute = require("./routes/usertype.js");
const usersRoute = require("./routes/users");
const categorysRoute = require('./routes/categorys');

/* call sequalize */
const sequelize = require("./db/squalizeconfig");

/* app uses */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(cors());
app.use(compression());
app.use(helmet()); // for http.header


//route
app.use((req, res, next) => {
      app.use("/api", [userTypesRoute, usersRoute, categorysRoute]);
      next();      
  
});
const port = process.env.Port || 4000;


sequelize
  .sync({ force: false })
  .then((res) => {  
    app.listen(port);
  })
  .catch((err) => {
    console.log(`error: ${err}`);
  });