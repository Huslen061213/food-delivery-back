const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const updateCategory = async (req, res) => {
  const { id, categoryName } = req.body;

  try {
    const data = await FoodCategoryModel.findByIdAndUpdate(
      id,
      { categoryName: categoryName?.trim() },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: String(err) });
  }
};
module.exports = updateCategory;
