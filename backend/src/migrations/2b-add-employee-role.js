"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "employees",
      "role",
      Sequelize.ENUM({
        values: ["ADMIN", "ENCODER", "AUDITOR"],
      })
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("employees", "role");
  },
};
