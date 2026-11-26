const productService = require('../services/products-services');
const path = require("path");

const getAllProducts = (req, res) => {
  // const products = productService.getAllProductsMessage();
  res.sendFile(path.join(__dirname, "..", "views", "products.html"));
};

const addProduct = (req, res) => {
  const result = productService.addProductMessage();
  res.send(result);
};

const getProductById = (req, res) => {
  const productId = req.params.id;
  const product = productService.getProductByIdMessage(productId);
  res.send(product);
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
};