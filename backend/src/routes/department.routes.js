const controller = require("../controllers/department.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.post("/departments", controller.create);
  app.get("/departments/:id", controller.findOne);
  app.get("/departments", controller.findAll);
  app.delete("/departments/:id", controller.delete);
  app.patch("/departments/:id", controller.update);
};
