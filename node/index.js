const express = require('express');
const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');

const app = express();

app.use('/order', orderRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);

app.listen(4000, ()=> {
    console.log(`Server is running on http://localhost:4000`)
});