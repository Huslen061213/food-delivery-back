const express = require("express");
const createCategory = require("../controller/foodCategory/createCategory");
const getCategory = require("../controller/foodCategory/getCategory");
const deleteCategory = require("../controller/foodCategory/deleteCategory");
const updateCategory = require("../controller/foodCategory/updateCategory");
const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);

categoryRouter.put("/", updateCategory);

categoryRouter.delete("/", deleteCategory);

categoryRouter.post("/", createCategory);

module.exports = categoryRouter;
