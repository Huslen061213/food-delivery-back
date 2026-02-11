const UserModel = require("../schemas/userSchema");

const isUserExist = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.status(404).json("Email Required");
  }
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    res.status(404).json("User Not Found");
  } else {
    req.user = user;
    next();
  }
};
module.exports = isUserExist;
