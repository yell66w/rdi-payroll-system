const controller = require("../controllers/position.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.get("/positions", controller.findAll);
  app.get("/positions/:id", controller.findOne);
  app.post("/positions", controller.create);
  app.patch("/positions/:id", controller.update);
  app.delete("/positions/:id", controller.delete);
};
