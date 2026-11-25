const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Book data requested');
  res.send('<h1>Here is the list of books!</h1>');
});

router.post('/', (req, res) => {
    console.log('Book data sent in the request');
  res.send('<h1>Book has been added!</h1>');
});

module.exports = router;