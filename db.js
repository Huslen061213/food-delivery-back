const mongoose = require("mongoose");
const connectToDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.log("DATABASE connection fail: MONGODB_URI env is missing");
    return;
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("DATABASE connection success");
  } catch (err) {
    console.log("DATABASE connection fail", err);
  }
};
module.exports = connectToDB;
