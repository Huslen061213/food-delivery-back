const { model, Schema } = require("mongoose");

const foodCategorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const foodCategoryModel = model("foodCategory", foodCategorySchema);

module.exports = foodCategoryModel;
