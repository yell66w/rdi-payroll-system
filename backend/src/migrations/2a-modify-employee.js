"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.renameColumn(
        "employees",
        "last_namee",
        "last_name",
        {
          transaction,
        }
      );
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.renameColumn(
        "employees",
        "last_name",
        "last_namee",
        {
          transaction,
        }
      );
    });
  },
};
