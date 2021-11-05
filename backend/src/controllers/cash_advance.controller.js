const { Op, employee } = require("../models");
const db = require("../models");
const CashAdvance = db.cash_advance;

const { addDays } = require("../helpers/date.helper");

exports.create = async (req, res) => {
  try {
    const default_payout_days = 15;
    const { amount_borrowed, no_of_payments, employee_id } = req.body;
    const date_now = Date.now();

    const cash_advance_details = {
      amount_borrowed,
      no_of_payments,
      employee_id,
    };

    cash_advance_details.date_from = date_now;
    cash_advance_details.date_to = addDays(
      date_now,
      default_payout_days * no_of_payments
    );

    const new_cash_advance = await CashAdvance.create(cash_advance_details);
    return res.status(200).send(new_cash_advance);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  // const date_from = req.query.date_from;
  // const date_to = req.query.date_to;
  const status = req.query.status;
  const approval_status = req.query.approval_status;

  let andItems = [];

  if (status) andItems.push({ status: status });
  if (approval_status) andItems.push({ approval_status: approval_status });

  let options = {
    where: {
      [Op.and]: andItems,
    },
  };

  options.include = [
    {
      model: employee,
      include: ["company", "department", "position"],
    },
  ];
  const cash_advance = await CashAdvance.findAll(options);
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
    return res.status(200).send("Cash advance updated successfully");
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
    return res.status(200).send("Cash advance deleted successfully.");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
