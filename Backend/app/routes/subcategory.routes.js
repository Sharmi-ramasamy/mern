module.exports = (app) => {
    const subcategory = require("../controllers/subcategory.controller.js");
    var router = require("express").Router();
    const authToken = require("../middleware/auth.js")
    router.post("/", subcategory.create);
    router.get("/", authToken,subcategory.findAll);
    router.get("/:id", subcategory.findOne);
    router.delete("/:id", subcategory.delete);
    router.delete("/", subcategory.deleteAll);  
    app.use("/api/subcategory", router);
  };
  