const db = require("../models");
const User = db.user;

exports.findAll = async (req, res) => {
  const users = await User.scope("withoutPassword").findAll();
  res.status(200).send(users);
};
exports.findOne = async (req, res) => {
  const user = await User.scope("withoutPassword").findByPk(req.params.id);
  res.status(200).send(user);
};
