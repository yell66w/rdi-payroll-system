const config = require("../config/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.user;

exports.signup = async (req, res) => {
  // Save user to database
  try {
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    res.status(200).send({ message: "User created successfully." });
  } catch (error) {
    let errorMessage = [];
    error.errors.map((e) => errorMessage.push(e.message));
    res.status(500).send({ message: errorMessage });
  }
};
exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }
    let token = jwt.sign({ id: user.id }, config.auth.secret, {
      expiresIn: 86400, // 24 hours
    });
    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      accessToken: token,
    });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};
