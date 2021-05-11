const express = require('express');

const app = express();
app.use('/add-product', (req, res, next) => {
    console.log('In the Add Product Middleware!!');
    res.send('<h1>Welcome from Add Product!!</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In the Root Middleware!!');
    res.send('<h1>Welcome from Express.js!!</h1>');
});

app.listen(3000);