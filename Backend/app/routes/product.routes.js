module.exports = (app) => {
    const product = require("../controllers/product.controller.js");
    var router = require("express").Router();
    const authToken = require("../utils/auth.js")
    router.post("/", authToken,product.addProduct);
    router.get("/", product.findAllProduct);
    router.get("/:id", product.findProductById);
    router.put("/:id",authToken, product.updateProductById)
    router.delete("/:id", authToken,product.deleteProductById);
    // router.delete("/", product.deleteAllProducts);
    app.use("/product", router);
  };
  