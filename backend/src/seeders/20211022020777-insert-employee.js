"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const departments = await queryInterface.sequelize.query(
      `SELECT id FROM departments;`
    );

    const departmentRows = departments[0];

    const companies = await queryInterface.sequelize.query(
      `SELECT id FROM companies;`
    );

    const companyRows = companies[0];

    const positions = await queryInterface.sequelize.query(
      `SELECT id FROM positions;`
    );

    const positionRows = positions[0];

    return await queryInterface.bulkInsert("employees", [
      {
        id: uuidv4(),
        first_name: "John",
        middle_name: "Margarita",
        last_name: "Doe",
        birth_date: new Date(),
        email: "john@gmail.com",
        contact_no: "09881112222",
        employee_type: "REGULAR",
        date_hired: "2018-6-1",
        time_shift_from: "9:00",
        time_shift_to: "11:00",
        address: "Barangay 98, Quezon City, Bataan Oriental, Mindanao, USA",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[0].id,
        department_id: departmentRows[0].id,
        position_id: positionRows[0].id,
      },
      {
        id: uuidv4(),
        first_name: "Johnny",
        middle_name: "Margarita",
        last_name: "Doe",
        birth_date: new Date(),
        email: "johnny@gmail.com",
        contact_no: "09881112222",
        employee_type: "REGULAR",
        date_hired: "2018-6-1",
        time_shift_from: "9:00",
        time_shift_to: "11:00",
        address: "Barangay 98, Quezon City, Bataan Oriental, Mindanao, USA",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[0].id,
        department_id: departmentRows[0].id,
        position_id: positionRows[0].id,
      },
      {
        id: uuidv4(),
        first_name: "Juana",
        middle_name: "Margarita",
        last_name: "Doe",
        birth_date: new Date(),
        email: "juana@gmail.com",
        contact_no: "09881112222",
        employee_type: "REGULAR",
        date_hired: "2018-6-1",
        time_shift_from: "9:00",
        time_shift_to: "11:00",
        address: "Barangay 98, Quezon City, Bataan Oriental, Mindanao, USA",
        created_at: new Date(),
        updated_at: new Date(),
        company_id: companyRows[0].id,
        department_id: departmentRows[0].id,
        position_id: positionRows[0].id,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("employees", null, {});
  },
};
