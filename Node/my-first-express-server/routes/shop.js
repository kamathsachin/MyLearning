const express = require('express');
const path = require('path');

const router = express.Router();
// const rootDir = require('../util/path');
const adminData = require('../routes/admin');

router.get('/', (req, res, next) => {
  const products = adminData.product;
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop', { prods: products, title: 'Book Shop' });
});

module.exports = router;
