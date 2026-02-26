const express = require("express");
const createDish = require("../controller/dish/createDish");
const getDishes = require("../controller/dish/getDishes");
const updateDish = require("../controller/dish/updateDish");

const dishRouter = express.Router();

dishRouter.get("/", getDishes);
dishRouter.post("/", createDish);
dishRouter.put("/", updateDish);

module.exports = dishRouter;
