const { sendErrorResponse, sendSuccessResponse } = require("../utils/response");

const getAllProductsMessage = () => {
  return "<h1>Fetching all products</h1>";
};

const addProduct = (res, name, price) => {
  console.log(`Adding product: ${name} - $${price}`);
  if (!name || !price) {
    return sendErrorResponse(res, {
      message: "Product name and price are required.",
      statusCode: 400,
    });
  }
  return sendSuccessResponse(res, {
    id: Math.floor(Math.random() * 1000),
    name,
    price,
  });
};

const getProductByIdMessage = (productId) => {
  return `<h1>Fetching product with ID: ${productId}</h1>`;
};

module.exports = {
  getAllProductsMessage,
  addProduct,
  getProductByIdMessage,
};
