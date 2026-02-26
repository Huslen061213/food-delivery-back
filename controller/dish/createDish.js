const FoodCategoryModel = require("../../schemas/foodCategorySchema");
const DishModel = require("../../schemas/dishSchema");

const createDish = async (req, res) => {
  const { name, price, description, image, categoryId } = req.body;

  try {
    if (!name || !description || !image || !categoryId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const parsedPrice = Number(price);
    if (!Number.isFinite(parsedPrice) || parsedPrice <= 0) {
      return res.status(400).json({ message: "Invalid price" });
    }

    const category = await FoodCategoryModel.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const dish = await DishModel.create({
      name: name.trim(),
      price: parsedPrice,
      description: description.trim(),
      image,
      category: categoryId,
    });

    const populatedDish = await dish.populate("category", "categoryName");
    res.status(201).json(populatedDish);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: String(err) });
  }
};

module.exports = createDish;
