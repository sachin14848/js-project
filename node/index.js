const express = require('express');
const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book-management');
const studentRoutes = require('./routes/student');
const courseRoutes = require('./routes/course');
const cartRouter = require('./routes/cart')
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password: 'root123',
    database: 'testdb'
})

connection.connect((err) => {
    if(err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
    const creationQuery = 'CREATE TABLE  students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(25), email VARCHAR(25))';
    connection.execute(creationQuery, (err, results) => {
        if(err) {
            console.error('Error creating table:', err);
            connection.end();
            return;
        }
        console.log('Table created successfully', results);
    });
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Student & Course Portal API!</h1>');
});

app.use('/order', orderRoutes);
app.use('/api/product', productRoutes);
app.use('/user', userRoutes);
app.use('/books', bookRoutes);
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/cart', cartRouter);


app.listen(4000, ()=> {
    console.log(`Server is running on http://localhost:4000`)
});