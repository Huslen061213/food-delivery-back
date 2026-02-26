const { model, Schema } = require("mongoose");

const dishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "foodCategory",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DishModel = model("dish", dishSchema);

module.exports = DishModel;
