const db = require("../models");
const Employee = db.employee;
const Company = db.company;

exports.findAll = async (req, res) => {
  const users = await Employee.findAll({ include: "company" });
  return res.status(200).send(users);
};
exports.findOne = async (req, res) => {
  const user = await Employee.findByPk(req.params.id);
  return res.status(200).send(user);
};

exports.create = async (req, res) => {
  if (!req.body.company_id) {
    return res.status(400).send("Company is required");
  }
  try {
    await Company.findByPk(req.body.company_id);
  } catch (error) {
    return res.status(400).send(error.message);
  }
  try {
    const new_employee = await Employee.create(req.body);
    return res.status(200).send(new_employee);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.update = async (req, res) => {
  if (req.body.company_id) {
    //Find the Company if it exists
    try {
      await Company.findByPk(req.body.company_id);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
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
