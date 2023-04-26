module.exports = (app) => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();
    router.post("/", user.userSignup);
    router.get("/", user.getAllUsers);
    router.get("/:id", user.findUserById);
    router.put("/:id", user.updateuserById);
    router.delete("/:id", user.deleteUserById);
    // router.delete("/", user.deleteAllUsers);
    // router.post('/login',user.findByUsername);
    router.post('/log',user.userLogin);
    app.use("/user", router);
  };
  