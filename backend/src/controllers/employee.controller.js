const { Op } = require("../models");
const db = require("../models");
const Employee = db.employee;

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
  const users = await Employee.findAll(options);
  return res.status(200).send(users);
};
exports.findOne = async (req, res) => {
  const user = await Employee.findByPk(req.params.id);
  return res.status(200).send(user);
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
