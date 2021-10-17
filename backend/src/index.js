const express = require("express");
const cors = require("cors");
const config = require("./config/config");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

//parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./models");
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hi there, welcome to this tutorial." });
});

// api routes todo edit
// require("./app/routes/book.routes")(app);
// require("./app/routes/auth.routes")(app);
// require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
