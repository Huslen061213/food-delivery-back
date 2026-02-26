const bcrypt = require("bcrypt");
const UserModel = require("../../schemas/userSchema");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = req.user || (await UserModel.findOne({ email }));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password);

    if (isPasswordMatching) {
      return res.status(200).json({
        message: "Login successful",
        user: {
          _id: user._id,
          email: user.email,
          role: user.role,
          address: user.address || "",
        },
      });
    } else {
      return res.status(400).json({ message: "Password doesn't match" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong", error: String(err) });
  }
};

module.exports = loginUser;
