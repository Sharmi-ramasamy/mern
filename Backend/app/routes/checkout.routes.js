module.exports = (app) => {
    const checkout = require("../controllers/checkout.controller.js");
    var router = require("express").Router();
    router.post("/", checkout.create);
    router.get("/", checkout.findAll);
    router.get("/:id", checkout.findOne);
    router.put("/:id", checkout.update);
    router.delete("/:id", checkout.delete);
    router.delete("/", checkout.deleteAll);
    app.use("/api/checkout", router);
  };
  