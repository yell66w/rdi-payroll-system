const controller = require("../controllers/company.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

app.post("/company", controller.create);
app.get("/company/:id", controller.findOne);
app.get("/company", controller.findAll);
app.delete("/company/:id", controller.delete);
app.patch("/company/:id", controller.update);
};
