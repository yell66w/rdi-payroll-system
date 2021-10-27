const { Op } = require("../models");
const db = require("../models");
const Employee = db.employee;
const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const e = require("express");

exports.exportToCSV = async (req, res) => {
  const employees = await Employee.findAll();
  const jsonData = JSON.parse(JSON.stringify(employees));
  const ws = fs.createWriteStream(
    path.resolve(__dirname, "../../assets", "employees.csv")
  );
  csv
    .write(jsonData, { headers: true })
    .on("finish", function () {
      console.log("Write to CSV successfully!");
      console.log(typeof jsonData);
    })
    .pipe(ws);
  return res.status(200).send("Data exported successfully.");
};

exports.findAll = async (req, res) => {
  const company = req.query.company;
  const department = req.query.department;
  const position = req.query.position;
  const date_hired_from = req.query.date_hired_from;
  const date_hired_to = req.query.date_hired_to;

  let options = { where: {} };

  if (company) options.where.company_id = company;
  if (department) options.where.department_id = department;
  if (position) options.where.position_id = position;

  if (date_hired_from && date_hired_to) {
    const start_date = new Date(date_hired_from);
    const end_date = new Date(date_hired_to);
    options.where.date_hired = {
      [Op.between]: [start_date, end_date],
    };
  }

  options.include = [
    "company",
    "department",
    "position",
    "deduction",
    "earning",
    "files",
  ];
  const employees = await Employee.findAll(options);
  return res.status(200).send(employees);
};
exports.findOne = async (req, res) => {
  const employee = await Employee.findByPk(req.params.id);
  return res.status(200).send(employee);
};

exports.create = async (req, res) => {
  try {
    const new_employee = await Employee.create(req.body);
    return res.status(200).send(new_employee);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    await Employee.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Employee updated successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Employee.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Employee deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
