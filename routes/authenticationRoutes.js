const express = require("express");
const loginUser = require("../controller/authentication/loginUser");
const createUser = require("../controller/user/createUser");
const UserModel = require("../schemas/userSchema");
const isEmailExist = require("../middleware/isEmailExist");
const isUserExist = require("../middleware/isUserExist");

const AuthenticationRouter = express.Router();

AuthenticationRouter.post("/signup", isEmailExist, createUser);
AuthenticationRouter.post("/login", isUserExist, loginUser);

module.exports = AuthenticationRouter;
