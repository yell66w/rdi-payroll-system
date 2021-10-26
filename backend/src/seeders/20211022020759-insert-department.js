"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const companies = await queryInterface.sequelize.query(
      `SELECT id FROM companies;`
    );

    const companyRows = companies[0];

    return await queryInterface.bulkInsert("departments", [
      {
        id: uuidv4(),
        name: "Accounting",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[0].id,
      },
      {
        id: uuidv4(),
        name: "IT",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[0].id,
      },
      {
        id: uuidv4(),
        name: "Accounting",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[1].id,
      },
      {
        id: uuidv4(),
        name: "IT",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[2].id,
      },
      {
        id: uuidv4(),
        name: "Accounting",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[3].id,
      },
      {
        id: uuidv4(),
        name: "IT",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[3].id,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("departments", null, {});
  },
};
