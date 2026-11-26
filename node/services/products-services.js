
const getAllProductsMessage = () => {
  return "<h1>Fetching all products</h1>";
};

const addProduct = (name, price) => {
  console.log(`Adding product: ${name} - $${price}`);
  return `<h1>Adding a new product: ${name} - $${price}</h1>`;
};

const getProductByIdMessage = (productId) => {
  return `<h1>Fetching product with ID: ${productId}</h1>`;
};

module.exports = {
  getAllProductsMessage,
  addProduct,
  getProductByIdMessage,
};
