const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(
        '<form action="/admin/add-product" method="POST"><input type="text" name="product"><button>Add Product</button></form>'
    );
});

// app.get will filter only GET request
// app.post will filter only POST request
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;