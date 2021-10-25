const controller = require("../controllers/earning.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.post("/earnings", controller.create);
  app.get("/earnings/:id", controller.findOne);
  app.get("/earnings", controller.findAll);
  app.delete("/earnings/:id", controller.delete);
  app.patch("/earnings/:id", controller.update);
};
