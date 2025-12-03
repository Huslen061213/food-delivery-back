const UserModel = require("../../schemas/foodCategorySchema");

const deleteCategory = async (req, res) => {
  const { id } = req.body;

  console.log(id);

  try {
    await UserModel.findByIdAndDelete(id);

    res.status(200).json(`Category deleted`);
  } catch (err) {
    res.status(500).json(`Something went wrong,${err}`);
  }
};
module.exports = deleteCategory;
