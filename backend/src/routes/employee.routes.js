const controller = require("../controllers/employee.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.get("/employees", controller.findAll);
  app.get("/employees/:id", controller.findOne);
  app.post("/employees", controller.create);
  app.patch("/employees/:id", controller.update);
  app.delete("/employees/:id", controller.delete);
};
