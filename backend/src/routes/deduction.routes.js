const controller = require("../controllers/deduction.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.post("/deductions", controller.create);
  app.get("/deductions/:id", controller.findOne);
  app.get("/deductions", controller.findAll);
  app.delete("/deductions/:id", controller.delete);
  app.patch("/deductions/:id", controller.update);
};
