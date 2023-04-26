module.exports = (app) => {
    const product = require("../controllers/product.controller.js");
    var router = require("express").Router();
    router.post("/", product.addProduct);
    router.get("/", product.findAllProduct);
    router.get("/:id", product.findProductById);
    router.put("/:id", product.updateProductById)
    router.delete("/:id", product.deleteProductById);
    // router.delete("/", product.deleteAllProducts);
    app.use("/product", router);
  };
  