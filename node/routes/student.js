const express = require('express');
const students = require('../constent/student');
const router = express.Router();

router.get('/', (req, res) => {
    const names = students.map(student => student.name).join(', ');
    res.send(`<h1>Welcome to the Student Management System</h1><p>Students: ${names}</p>`);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(student=> student.id === id);
    if(student) {
        res.send(`<h1>Student Details</h1><p>ID: ${student.id}</p><p>Name: ${student.name}</p>`);
    } else {
        res.status(404).send('<h1>Student not found</h1>');
    }
});


module.exports = router;