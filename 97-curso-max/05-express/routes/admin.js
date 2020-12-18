const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  const response = `<html>
    <head>
      <title>Form</title>
    </head>
  
    <body>
      <form action='/product' method='POST'>
        <input type='text' name='title'/>
        <button type='submit'>Add Product</button>
      </form>
    </body>
    </html>`;
  res.send(response);
});

router.post('/product', (req, res, next) => {
  console.log(req.body);

  res.redirect('/');
});

module.exports = router;
