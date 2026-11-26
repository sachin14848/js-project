const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Welcome to the Product Management System</h1>");
});

router.post("/", (req, res) => {
  res.send("<h1>A new product has been added.</h1>");
});

router.get("/:id", (req, res) => {
  res.send(`<h1>Fetching product with ID: ${req.params.id}</h1>`);
});

module.exports = router;
