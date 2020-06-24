const Sequelize = require('sequelize');

const sequelize = new Sequelize("hamrobaglung", "root", "sql123", {
  dialect: "mysql",
  host: "127.0.0.1",
  port: "3306",
  logging: false
});

module.exports = sequelize;