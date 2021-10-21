"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "role", {
      type: Sequelize.ENUM({
        values: ["ADMIN", "ENCODER", "AUDITOR"],
      }),
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("users", "role");
  },
};
