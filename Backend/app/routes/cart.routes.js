module.exports = (app) => {
    const cart = require("../controllers/cart.controller.js");
    var router = require("express").Router();
    const authToken = require("../middleware/auth.js")
    router.post("/", cart.create);
    router.get("/", authToken,cart.findAll);
    router.get("/:id", cart.findOne);
    router.put("/:id", cart.update);
    router.delete("/:id", cart.delete);
    router.delete("/", cart.deleteAll);
    app.use("/cart", router);
  };
  