const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//POST user/login
router.post("/login", userController.login);

//POST user/signUp
router.post("/signup", userController.SignUp);

//POST user/checkEmail
router.post("/checkEmail", userController.CheckEmail);

//POST user/checkUsername
router.post("/checkUsername", userController.CheckUsername);

//POST user/deleteUser
router.post("/deleteUser", userController.DeleteUser);

//POST user/updateUserinfo
router.post("/updateUserinfo", userController.updateUserinfo)

//GET user/LogOut
router.get("/logout", userController.logout)

module.exports = router;