const { createProduct } = require("./createProducts");
const { getAllProducts } = require("./getAllProducts");
const { getProductById } = require("./getOneProducts");
const { updateProduct } = require("./updateProducts");
const { deleteProduct } = require("./removeProducts");

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
