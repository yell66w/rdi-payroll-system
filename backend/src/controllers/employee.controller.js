const db = require("../models");
const Employee = db.employee;

exports.findAll = async (req, res) => {
  const users = await Employee.findAll();
  res.status(200).send(users);
};
exports.findOne = async (req, res) => {
  const user = await Employee.findByPk(req.params.id);
  res.status(200).send(user);
};
