const bcrypt = require("bcrypt");
const UserModel = require("../../schemas/userSchema");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const { user } = req;
  try {
    // const user = await UserModel.findOne({ email });
    const hashedPassword = user.password;
    const isPasswordMatching = await bcrypt.compare(password, hashedPassword);

    if (isPasswordMatching) {
      res.status(200).json(`User: ${user}`);
    } else {
      res.status(400).json("Password doesn't match");
    }
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = loginUser;
