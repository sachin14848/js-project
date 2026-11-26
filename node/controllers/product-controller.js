const getAllProducts = (req, res) => {
  res.send("<h1>Here is the list of products!</h1>");
};

const addProduct = (req, res) => {
  res.send("<h1>Product has been added!</h1>");
};

const getProductById = (req, res) => {
  const productId = req.params.id;
  res.send(`<h1>Fetching product with ID: ${productId}</h1>`);
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
};