module.exports = (app) => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();
    const authToken = require("../utils/auth.js");
    router.post("/",user.userSignup);
    router.get("/",user.getAllUsers);
    router.get("/:id", user.findUserById);
    router.put("/:id",authToken, user.updateuserById);
    router.delete("/:id",authToken, user.deleteUserById);
    // router.delete("/", user.deleteAllUsers);
    // router.post('/login',user.findByU/sername);
    router.post('/log',user.userLogin);
    app.use("/user", router);
  };