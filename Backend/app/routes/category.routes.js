module.exports = (app) => {
  const category = require("../controllers/category.controller.js")
  const router = require("express").Router()
  const authToken = require("../utils/auth.js")
  router.post("/", authToken, category.addCategory)
  router.get("/", category.findAllCategory)
  router.get("/:id", category.findCategoryById)
  router.put("/:id", authToken, category.updateategoryById)
  router.delete("/:id", authToken, category.deleteCategoryById)
  // router.delete("/", category.deleteAllCategory);
  app.use("/category", router)
}
