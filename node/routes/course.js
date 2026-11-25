const express = require('express');
const course = require('../constent/course');

const router = express.Router();

router.get('/', (req, res) => {
    const courseNames = course.map(course => course.name).join(', ');
    res.send(`<h1>Welcome to the Course Management System</h1><p>Courses: ${courseNames}</p>`);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const courseDetails = course.find(course => course.id === id);
    if(courseDetails) {
        res.send(`<h1>Course Details</h1><p>ID: ${courseDetails.id}</p><p>Name: ${courseDetails.name}</p><p>Description: ${courseDetails.description}</p>`);
    } else {
        res.status(404).send('<h1>Course not found</h1>');
    }
});


module.exports = router;