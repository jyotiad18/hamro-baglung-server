'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {    
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: DataTypes.STRING
  }, {});
  Category.associate = function (models) {
    models.Category.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.Category.hasMany(models.Post);
  };    
  return Category;
};