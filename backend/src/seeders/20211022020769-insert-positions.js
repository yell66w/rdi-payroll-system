"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const departments = await queryInterface.sequelize.query(
      `SELECT id FROM departments;`
    );

    const departmentRows = departments[0];

    return await queryInterface.bulkInsert("positions", [
      {
        id: uuidv4(),
        name: "CEO",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[0].id,
      },
      {
        id: uuidv4(),
        name: "Clerk",
        created_at: new Date(),
        updated_at: new Date(),
        department_id: departmentRows[0].id,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("positions", null, {});
  },
};
