module.exports = (app) => {
  const category = require("../controllers/category.controller.js");
  var router = require("express").Router();
  router.post("/", category.addCategory);
  router.get("/", category.findAllCategory);
  router.get("/:id", category.findCategoryById);
  router.put("/:id", category.updateategoryById);
  router.delete("/:id", category.deleteCategoryById);
  // router.delete("/", category.deleteAllCategory);
  app.use("/category", router);
}
