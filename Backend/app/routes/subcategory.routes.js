module.exports = (app) => {
    const subcategory = require("../controllers/subcategory.controller.js");
    var router = require("express").Router();
    const authToken = require("../utils/auth.js")
    router.post("/",authToken, subcategory.addSubcategory);
    router.get("/", subcategory.findAllSubcategory);
    router.get("/:id", subcategory.findSubcategoryById);
    router.delete("/:id", authToken,subcategory.deleteSubcategoryById);
    // router.delete("/", subcategory.deleteAllSubcategory);  
    router.put("/:id",authToken, subcategory.updateSubcategoryById)
    app.use("/subcategory", router);
  };
  