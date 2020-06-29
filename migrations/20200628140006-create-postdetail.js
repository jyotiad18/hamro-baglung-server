
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PostDetails', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: true
      },
      creditby: {
        type: Sequelize.STRING,
        allowNull: true
      },
      publish: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      PostId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",      
        allowNull: false,
        references: {
          model: 'Posts',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PostDetails');
  }
};