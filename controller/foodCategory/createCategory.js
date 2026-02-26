const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const createCategory = async (req, res) => {
  const { categoryName } = req.body;

  try {
    if (!categoryName || !categoryName.trim()) {
      return res.status(400).json({ message: "categoryName is required" });
    }

    const data = await FoodCategoryModel.create({
      categoryName: categoryName.trim(),
    });

    res.status(201).json(data);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "Category already exists" });
    }
    res.status(500).json({ message: "Something went wrong", error: String(err) });
  }
};
module.exports = createCategory;
