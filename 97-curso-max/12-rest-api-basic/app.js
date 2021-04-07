const express = require('express');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  // Para añadir varios dominios se deben separar por comas
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    // OPTIONS no es necesario añadirlo
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});

app.use('/feed', feedRoutes);

app.listen(8080);
