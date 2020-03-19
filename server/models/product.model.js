const mongoose = require("mongoose");
const requiredMsg = "{PATH} is required.";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, requiredMsg],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."]
    },
    price: {
      type: Number,
      required: [true, requiredMsg],
      min: [1, "{PATH} must be at least {MIN}"]
    },
    desc: {
      type: String,
      required: [true, requiredMsg],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."]
    },
    imgUrl: {
      type: String,
      required: [true, requiredMsg]
    }
  },
  { timestamps: true }
);

// register schema with mongoose and create the model, which will create a "product" collection when we insert to it
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
