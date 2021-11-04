const controller = require("../controllers/file.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.post("/files", controller.create);
  app.get("/files/:id", controller.findOne);
  app.get("/files", controller.findAll);
  app.delete("/files/:id", controller.delete);
  app.patch("/files/:id", controller.update);
};
