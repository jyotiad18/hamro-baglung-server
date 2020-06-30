nm'use strict';
module.exports = (sequelize, DataTypes) => {   
    const User = sequelize.define('User', {      
        email: {
            type: DataTypes.STRING, allowNull: false,
            validation: {
                isEmail: true,
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                min: 8,
                notEmpty: true
            }
        },
        fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validation: {           
            notEmpty: true
        }
    }
    }, {});   
    User.associate = function (models) {  
        models.User.hasMany(models.Category);
        models.User.belongsTo(models.UserType, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
        models.User.hasMany(models.Post);
    };    
    return User;
};