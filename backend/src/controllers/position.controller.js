const db = require("../models");
const Position = db.position;

exports.findAll = async (req, res) => {
  const position = await Position.findAll();
  return res.status(200).send(position);
};
exports.findOne = async (req, res) => {
  const position = await Position.findByPk(req.params.id);
  return res.status(200).send(position);
};

exports.create = async (req, res) => {
  try {
    const new_position = await Position.create(req.body);
    return res.status(200).send(new_position);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    await Position.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Position updated successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Position.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Position deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
