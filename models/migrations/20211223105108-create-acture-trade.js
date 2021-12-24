'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ActureTrades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dealAmount: {
        type: Sequelize.STRING
      },
      dealYear: {
        type: Sequelize.STRING
      },
      apartmentName: {
        type: Sequelize.STRING
      },
      dealMonth: {
        type: Sequelize.STRING
      },
      dealMonth: {
        type: Sequelize.STRING
      },
      dealDay: {
        type: Sequelize.STRING
      },
      area: {
        type: Sequelize.STRING
      },
      floor: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ActureTrades');
  }
};