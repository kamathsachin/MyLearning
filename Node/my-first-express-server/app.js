const express = require('express');

const app = express();
app.use('/add-product', (req, res, next) => {
    console.log('In the Add Product Middleware!!');
    res.send('<form action="/product" method="POST"><input type="text" name="product"><button>Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log('Entered Add Products');
})

app.use('/', (req, res, next) => {
    console.log('In the Root Middleware!!');
    res.send('<h1>Welcome from Express.js!!</h1>');
});

app.listen(3000);