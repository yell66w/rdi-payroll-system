const db = require("../models");
const CashAdvance = db.cash_advance;

exports.create = async (req, res) => {
  try {
    const new_cash_advance = await CashAdvance.create(req.body);
    return res.status(200).send(new_cash_advance);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  const cash_advance = await CashAdvance.findAll();
  return res.status(200).send(cash_advance);
};

exports.findOne = async (req, res) => {
  const cash_advance = await CashAdvance.findByPk(req.params.id);
  return res.status(200).send(cash_advance);
};

//TODO ADD EARNING TOTAL LOGIC
exports.update = async (req, res) => {
  try {
    await CashAdvance.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Cash Advanceupdated successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await CashAdvance.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send("Cash Advance deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
