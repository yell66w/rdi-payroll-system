exports.findAll = (req, res) => {
  res.status(200).send("All Users");
};
exports.findOne = (req, res) => {
  res.status(200).send(`One user ${req.params.id}`);
};

exports.createUser = (req, res) => {
  res.status(200).send("User created.");
};
