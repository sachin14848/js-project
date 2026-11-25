const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>Welcome to the User Management System</h1>');
});

router.post('/', (req, res) => {
  res.send('<h1>A new user has been added.</h1>');
});



module.exports = router;