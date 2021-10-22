const db = require("../models");
const Department = db.department;

exports.create = async (req, res) => {
  try {
    const new_department = await Department.create(req.body);
    return res.status(200).send(new_department);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const department = await Department.findAll({ include: "company" });
  return res.status(200).send(department);
};

exports.findOne = async (req, res) => {
  const department = await Department.findByPk(req.params.id);
  return res.status(200).send(department);
};

exports.update = async (req, res) => {
  try {
    await Department.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Department updated successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Department.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Department deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
