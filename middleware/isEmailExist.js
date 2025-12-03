const isEmailExist = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    res.status(404).json("Email is required");
  }

  const user = await UserModel.findOne({ email: email });
  if (!user) {
    next();
  } else {
    res.status(404).json("User found");
  }
};
module.exports = isEmailExist;
