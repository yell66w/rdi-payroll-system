const db = require("../models");
const File = db.file;

exports.create = async (req, res) => {
  try {
    const new_file = await File.create(req.body);
    return res.status(200).send(new_file);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const file = await File.findAll({include:["employee"]});
  return res.status(200).send(file);
};

exports.findOne = async (req, res) => {
  const file = await File.findByPk(req.params.id);
  return res.status(200).send(file);
};

exports.update = async (req, res) => {
  try {
    await File.update(req.body, {
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
    await File.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("File deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
