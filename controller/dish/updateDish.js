const FoodCategoryModel = require("../../schemas/foodCategorySchema");
const DishModel = require("../../schemas/dishSchema");

const updateDish = async (req, res) => {
  const { id, name, price, description, image, categoryId } = req.body;

  try {
    if (!id) {
      return res.status(400).json({ message: "Dish id is required" });
    }

    const updateData = {};

    if (typeof name === "string") {
      if (!name.trim()) {
        return res.status(400).json({ message: "Dish name cannot be empty" });
      }
      updateData.name = name.trim();
    }

    if (typeof description === "string") {
      if (!description.trim()) {
        return res.status(400).json({ message: "Description cannot be empty" });
      }
      updateData.description = description.trim();
    }

    if (typeof image === "string") {
      if (!image.trim()) {
        return res.status(400).json({ message: "Image cannot be empty" });
      }
      updateData.image = image;
    }

    if (price !== undefined) {
      const parsedPrice = Number(price);
      if (!Number.isFinite(parsedPrice) || parsedPrice <= 0) {
        return res.status(400).json({ message: "Invalid price" });
      }
      updateData.price = parsedPrice;
    }

    if (categoryId) {
      const category = await FoodCategoryModel.findById(categoryId);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      updateData.category = categoryId;
    }

    const updatedDish = await DishModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).populate("category", "categoryName");

    if (!updatedDish) {
      return res.status(404).json({ message: "Dish not found" });
    }

    res.status(200).json(updatedDish);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: String(err) });
  }
};

module.exports = updateDish;
