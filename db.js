const mongoose = require("mongoose");
const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Gvnj-247:Huslen1213@food-delivery.4ixxn37.mongodb.net/"
    );
    console.log("DATABASE connection success");
  } catch (err) {
    console.log("DATABASE connection fail", err);
  }
};
module.exports = connectToDB;
