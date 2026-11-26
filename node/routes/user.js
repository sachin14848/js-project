const express = require("express");

const router = express.Router();

router.get("/:userId", (req, res) => {
  res.send("<h1>Fetching all users</h1>");
});

router.get("/:userId", (req, res) => {
  res.send(`<h1>Fetching user with ID: ${req.params.userId}</h1>`);
});

router.post("/", (req, res) => {
  res.send("<h1>Adding a new user</h1>");
});

module.exports = router;
