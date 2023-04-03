/* eslint-disable no-undef */
module.exports = (app) => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();
    router.post("/", user.create);
    router.get("/", user.findAll);
    router.get("/:id", user.findOne);
    router.put("/:id", user.update);
    router.put("/", user.update);
    router.delete("/:id", user.delete);
    router.delete("/", user.deleteAll);
    app.use("/api/user", router);
  };
  