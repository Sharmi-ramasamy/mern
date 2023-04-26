module.exports = (app) => {
    const checkout = require("../controllers/checkout.controller.js");
    var router = require("express").Router();
    router.post("/", checkout.addCheckout);
    router.get("/", checkout.getAllCheckouts);
    router.get("/:id", checkout.findCheckoutById);
    router.put("/:id", checkout.updateCheckoutById);
    router.delete("/:id", checkout.deleteCheckoutById);
    router.delete("/", checkout.deleteAllCheckout);
    app.use("/checkout", router);
  };
  