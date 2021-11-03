const controller = require("../controllers/tardiness.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

app.post("/tardinesses", controller.create);
app.get("/tardinesses/:id", controller.findOne);
app.get("/tardinesses", controller.findAll);
app.delete("/tardinesses/:id", controller.delete);
app.patch("/tardinesses/:id", controller.update);
};
