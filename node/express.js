const express = require('express');

const app = express();

app.use((req, res, next)=> {
    console.log('First Middleware');
    next();
});

app.use('/library-2', (req, res, next)=> {
    console.log('Second Middleware');
    next();
});
app.use('/library-3', (req, res, next)=> {
    console.log('Second Middleware');
    next();
});

app.get('/', (req, res, next)=> {
    console.log('Root Middleware');
    res.send('<h1>Hello from Express Root</h1>');
});

app.get('/library-1', (req, res, next)=> {
    console.log('Third Middleware');
    res.send('<h1>Hello from Express Library 1</h1>');
});

app.get('/library-2', (req, res, next)=> {
    console.log('Fourth Middleware');
    res.send('<h1>Hello from Express Library 2</h1>');
});

app.get('/library-3', (req, res, next)=> {
    console.log('Fifth Middleware');
    res.send('<h1>Hello from Express Library 3</h1>');
});

app.listen(5000, ()=> {
    console.log('Server is up and running on port 5000! Ready to handle requests.')
});
