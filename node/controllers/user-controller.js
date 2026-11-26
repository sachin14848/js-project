const getAllUsers = (req, res) => {
  res.send("<h1>Fetching all users</h1>");
};

const getUserById = (req, res) => {
  res.send(`<h1>Fetching user with ID: ${req.params.userId}</h1>`);
};

const addUser = (req, res) => {
  res.send("<h1>Adding a new user</h1>");
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
};
