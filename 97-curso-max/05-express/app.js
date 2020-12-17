const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware para parsear el cuerpo de las peticiones
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// El path no es el absoluto, se indica que debe comenzar por el especificado
// Es importante el orden de los middleware porque se ejecutan de arriba hacia abajo
app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

app.use('/add-product', (req, res, next) => {
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

app.use('/product', (req, res, next) => {
  console.log(req.body);

  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
