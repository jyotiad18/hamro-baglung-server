'use strict';
module.exports = (sequelize, DataTypes) => {
  let UserType = sequelize.define('UserType', {
    type: {
      type: DataTypes.STRING, allowNull: false, unique: true,
      validate: {
        notEmpty: true
      }
    },
    description: DataTypes.STRING
  }, {});  

  UserType.associate = function (models) {
    models.UserType.hasMany(models.User);
  };
  
  return UserType;
};