
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shortdescription: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      years: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tags: {
        type: Sequelize.STRING,
        allowNull: true
      },
      urllink: {
        type: Sequelize.STRING,
        allowNull: true
      },
      picturelink: {
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
      CategoryId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      UserId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Users',
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
    return queryInterface.dropTable('Posts');
  }
};