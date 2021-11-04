const db = require("../models");
const Company = db.company;

exports.create = async (req, res) => {
  try {
    const new_company = await Company.create(req.body);
    return res.status(200).send(new_company);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const company = await Company.findAll({
    include: ["employees", "departments"],
  });
  return res.status(200).send(company);
};

exports.findOne = async (req, res) => {
  const company = await Company.findByPk(req.params.id);
  return res.status(200).send(company);
};

exports.update = async (req, res) => {
  try {
    await Company.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Company updated successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Company.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Company deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
