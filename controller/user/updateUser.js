const UserModel = require("../../schemas/userSchema");

const updateUser = async (req, res) => {
  const { id, email } = req.body;

  try {
    await UserModel.findByIdAndUpdate(
      id,
      { email },
      {
        new: true,
        
        runValidators: true,
        
      }
    );

    res.status(200).json(`user update`);
  } catch (err) {
    res.status(500).json(`Something went wrong,${err}`);
  }
};
module.exports = updateUser;
