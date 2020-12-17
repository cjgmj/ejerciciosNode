const express = require('express');

const app = express();

// El path no es el absoluto, se indica que debe comenzar por el especificado
// Es importante el orden de los middleware porque se ejecutan de arriba hacia abajo
app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

app.use('/add-product', (req, res, next) => {
  res.send('<h1>The "Add Product" Page</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
