const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  groupe: {
    type: String,
    required: true,
  },
  subgroupe: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  purchasePrice: {
    type: Number,
    required: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
  },
  images: {
    type: [String], // Масив URL зображень
    required: true,
  },
  article: {
    type: Number,
    required: true,
  },
  barcode: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
