const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Middleware para parsear el cuerpo de las peticiones
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  const response = `<html>
    <head>
      <title>Error 404</title>
    </head>
  
    <body>
      <h1>Error 404: Page Not Found</h1>
    </body>
    </html>`;
  res.status(404).send(response);
});

// El path no es el absoluto, se indica que debe comenzar por el especificado
// Es importante el orden de los middleware porque se ejecutan de arriba hacia abajo
app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

app.listen(3000);
