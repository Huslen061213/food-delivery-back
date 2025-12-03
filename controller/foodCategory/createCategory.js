const UserModel = require("../../schemas/foodCategorySchema");

const createCategory = async (req, res) => {
  const { categoryName } = req.body;

  try {
    const data = await UserModel.create({
      categoryName: categoryName,
    });

    res.status(201).json(`createdCategory:${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong,${err}`);
  }
};
module.exports = createCategory;
