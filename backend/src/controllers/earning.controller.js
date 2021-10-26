const db = require("../models");
const Earning = db.earning;

exports.create = async (req, res) => {
  try {
    const new_earning = await Earning.create(req.body);
    return res.status(200).send(new_earning);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const earning = await Earning.findAll();
  return res.status(200).send(earning);
};

exports.findOne = async (req, res) => {
  const earning = await Earning.findByPk(req.params.id);
  return res.status(200).send(earning);
};

//TODO ADD EARNING TOTAL LOGIC
exports.update = async (req, res) => {
  try {
    await Earning.update(req.body, {
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
    await Earning.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Earning deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
