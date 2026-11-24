const express = require('express');

const app = express();

app.use((req, res, next)=> {
    console.log('First Middleware');
    next();
});

app.use((req, res, next)=> {
    console.log('Second Middleware');
    res.send('<h1>Hello from Express</h1>');
});

app.listen(5000, ()=> {
    console.log('Server is up and running on port 5000! Ready to handle requests.')
});
