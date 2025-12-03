const express = require("express");
const createUser = require("../controller/user/createUser");
const getUser = require("../controller/user/getUser");
const deleteUser = require("../controller/user/deleteUser");
const updateUser = require("../controller/user/updateUser");
const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.put("/", updateUser);

userRouter.delete("/", deleteUser);

userRouter.post("/", createUser);

module.exports = userRouter;
