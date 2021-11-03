const db = require("../models");
const Tardiness = db.tardiness;

exports.create = async (req, res) => {
  try {
    const new_tardiness = await Tardiness.create(req.body);
    return res.status(200).send(new_tardiness);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const tardiness = await Tardiness.findAll();
  return res.status(200).send(tardiness);
};

exports.findOne = async (req, res) => {
  const tardiness = await Tardiness.findByPk(req.params.id);
  return res.status(200).send(tardiness);
};

exports.update = async (req, res) => {
  try {
    await Tardiness.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Tardiness updated successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Tardiness.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Tardiness deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
