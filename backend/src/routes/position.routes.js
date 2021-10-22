const controller = require("../controllers/position.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.get("/position", controller.findAll);
  app.get("/position/:id", controller.findOne);
  app.post("/position", controller.create);
  app.patch("/position/:id", controller.update);
  app.delete("/position/:id", controller.delete);
};
