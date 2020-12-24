const path = require('path');

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;

  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    productCSS: true,
    activeShop: true,
    // layout: false, // Parámetro por defecto para no cargar el layout predeterminado
  });
});

module.exports = router;
