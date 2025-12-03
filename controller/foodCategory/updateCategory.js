const UserModel = require("../../schemas/foodCategorySchema");

const updateCategory = async (req, res) => {
  const { id, categoryName } = req.body;

  try {
    const data = await UserModel.findByIdAndUpdate(
      id,
      { categoryName },
      {
        new: true,

        runValidators: true,
      }
    );

    res.status(200).json(`user ${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong,${err}`);
  }
};
module.exports = updateCategory;
