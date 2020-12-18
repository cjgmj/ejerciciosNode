const express = require('express');

const router = express.Router();

// /admin/add-product
router.get('/add-product', (req, res, next) => {
  const response = `<html>
    <head>
      <title>Form</title>
    </head>
  
    <body>
      <form action='/admin/add-product' method='POST'>
        <input type='text' name='title'/>
        <button type='submit'>Add Product</button>
      </form>
    </body>
    </html>`;
  res.send(response);
});

// /admin/add-product
router.post('/add-product', (req, res, next) => {
  console.log(req.body);

  res.redirect('/');
});

module.exports = router;
