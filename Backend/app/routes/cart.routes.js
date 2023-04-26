module.exports = (app) => {
    const cart = require("../controllers/cart.controller.js");
    var router = require("express").Router();
    const authToken = require("../middleware/auth.js")
    router.post("/", cart.addCart);
    router.get("/", authToken,cart.getCartItems);
    router.get("/:id", cart.getCartItemsById);
    router.put("/:id", cart.updateCartById);
    router.delete("/:id", cart.deleteCartById);
    router.delete("/", cart.deleteAllCartItems);
    app.use("/cart", router);
  };
  