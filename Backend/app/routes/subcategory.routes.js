module.exports = (app) => {
    const subcategory = require("../controllers/subcategory.controller.js");
    var router = require("express").Router();
    router.post("/", subcategory.addSubcategory);
    router.get("/", subcategory.findAllSubcategory);
    router.get("/:id", subcategory.findSubcategoryById);
    router.delete("/:id", subcategory.deleteSubcategoryById);
    // router.delete("/", subcategory.deleteAllSubcategory);  
    router.put("/:id", subcategory.updateSubcategoryById)
    app.use("/subcategory", router);
  };
  