
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comments', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      PostDetailId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'PostDetails',
          key: 'id'
        }
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      publish: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
    return queryInterface.dropTable('Comments');
  }
};