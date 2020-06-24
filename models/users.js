const Sequelize = require('Sequelize');
const sequelize = require('../db/squalizeconfig.js');
const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    typeid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fullname: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;