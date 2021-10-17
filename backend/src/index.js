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
db.sequelize.sync();

require("./routes/user.routes")(app);
require("./routes/auth.routes")(app);

// set port, listen for requests
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
