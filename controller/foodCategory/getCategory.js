const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const getCategory = async (req, res) => {
  try {
    const data = await FoodCategoryModel.find().sort({ createdAt: 1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: String(err) });
  }
};
module.exports = getCategory;
