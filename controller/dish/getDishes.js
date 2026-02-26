const DishModel = require("../../schemas/dishSchema");

const getDishes = async (req, res) => {
  const { categoryId } = req.query;

  try {
    const filter = {};
    if (categoryId) {
      filter.category = categoryId;
    }

    const dishes = await DishModel.find(filter)
      .populate("category", "categoryName")
      .sort({ createdAt: -1 });

    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: String(err) });
  }
};

module.exports = getDishes;
