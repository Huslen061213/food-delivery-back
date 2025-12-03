const UserModel = require("../../schemas/userSchema");
const bcrypt = require("bcrypt");
const SALT_ROUND = 10;
const createUser = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
  try {
    const data = await UserModel.create({
      email: email,
      password: hashedPassword,
    });

    res.status(201).json(`createdUser:${data}`);
  } catch (err) {
    res.status(500).json(`Something went wrong,${err}`);
  }
};
module.exports = createUser;
