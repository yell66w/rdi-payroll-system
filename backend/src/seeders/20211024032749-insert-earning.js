"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("earnings", [
      {
        id: uuidv4(),
        basic_pay: Math.floor(Math.random() * 300),
        overtime_rate: Math.floor(Math.random() * 300),
        night_differential: Math.floor(Math.random() * 300),
        sunday_pay: Math.floor(Math.random() * 300),
        legal_holiday: Math.floor(Math.random() * 300),
        special_holiday: Math.floor(Math.random() * 300),
        total: Math.floor(Math.random() * 300),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        basic_pay: Math.floor(Math.random() * 300),
        overtime_rate: Math.floor(Math.random() * 300),
        night_differential: Math.floor(Math.random() * 300),
        sunday_pay: Math.floor(Math.random() * 300),
        legal_holiday: Math.floor(Math.random() * 300),
        special_holiday: Math.floor(Math.random() * 300),
        total: Math.floor(Math.random() * 300),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        basic_pay: Math.floor(Math.random() * 300),
        overtime_rate: Math.floor(Math.random() * 300),
        night_differential: Math.floor(Math.random() * 300),
        sunday_pay: Math.floor(Math.random() * 300),
        legal_holiday: Math.floor(Math.random() * 300),
        special_holiday: Math.floor(Math.random() * 300),
        total: Math.floor(Math.random() * 300),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        basic_pay: Math.floor(Math.random() * 300),
        overtime_rate: Math.floor(Math.random() * 300),
        night_differential: Math.floor(Math.random() * 300),
        sunday_pay: Math.floor(Math.random() * 300),
        legal_holiday: Math.floor(Math.random() * 300),
        special_holiday: Math.floor(Math.random() * 300),
        total: Math.floor(Math.random() * 300),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        basic_pay: Math.floor(Math.random() * 300),
        overtime_rate: Math.floor(Math.random() * 300),
        night_differential: Math.floor(Math.random() * 300),
        sunday_pay: Math.floor(Math.random() * 300),
        legal_holiday: Math.floor(Math.random() * 300),
        special_holiday: Math.floor(Math.random() * 300),
        total: Math.floor(Math.random() * 300),
        created_at: new Date(),
        updated_at: new Date(),
      },
      
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("earnings", null, {});
  },
};
