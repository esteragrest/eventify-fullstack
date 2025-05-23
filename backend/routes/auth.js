const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router({ mergeParams: true });

router.post("/register", UserController.createUser);

router.post("/login", UserController.loginUser);

router.post("/logout", UserController.logoutUser);

module.exports = router;
