const productService = require('../services/products-services');

const getAllProducts = (req, res) => {
  const products = productService.getAllProductsMessage();
  res.send(products);
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