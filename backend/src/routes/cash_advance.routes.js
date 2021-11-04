const controller = require("../controllers/cash_advance.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.post("/cash_advance", controller.create);
  app.get("/cash_advance/:id", controller.findOne);
  app.get("/cash_advance", controller.findAll);
  app.delete("/cash_advance/:id", controller.delete);
  app.patch("/cash_advance/:id", controller.update);
};
