
const getAllProductsMessage = () => {
  return "<h1>Fetching all products</h1>";
};

const addProductMessage = () => {
  return "<h1>Adding a new product</h1>";
};

const getProductByIdMessage = (productId) => {
  return `<h1>Fetching product with ID: ${productId}</h1>`;
};

module.exports = {
  getAllProductsMessage,
  addProductMessage,
  getProductByIdMessage,
};
