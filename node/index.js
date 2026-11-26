const express = require('express');
const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book-management');
const studentRoutes = require('./routes/student');
const courseRoutes = require('./routes/course');
const cartRouter = require('./routes/cart')

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Student & Course Portal API!</h1>');
});

app.use('/order', orderRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);
app.use('/books', bookRoutes);
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/cart', cartRouter);


app.listen(4000, ()=> {
    console.log(`Server is running on http://localhost:4000`)
});