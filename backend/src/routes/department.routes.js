const controller = require("../controllers/department.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

app.post("/department", controller.create);
app.get("/department/:id", controller.findOne);
app.get("/department", controller.findAll);
app.delete("/department/:id", controller.delete);
app.patch("/department/:id", controller.update);
};