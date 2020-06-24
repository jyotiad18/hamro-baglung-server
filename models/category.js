const Sequelize = require("Sequelize");
const sequelize = require("../db/squalizeconfig.js");
const User = require('./users.js');
const Category = sequelize.define("category", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,  
    references: {
      model: User, // Can be both a string representing the table name or a Sequelize model
      key: "id",
    },
  },
});
User.hasMany(Category); // Will add userId to Task model
Category.belongsTo(User); // Will also add userId to Task model
module.exports = Category;
