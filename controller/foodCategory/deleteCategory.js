const FoodCategoryModel = require("../../schemas/foodCategorySchema");
const DishModel = require("../../schemas/dishSchema");

const deleteCategory = async (req, res) => {
  const { id } = req.body;

  try {
    await FoodCategoryModel.findByIdAndDelete(id);
    await DishModel.deleteMany({ category: id });

    res.status(200).json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: String(err) });
  }
};
module.exports = deleteCategory;
