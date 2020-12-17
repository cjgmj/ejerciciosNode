const http = require('http');

const express = require('express');
const { reset } = require('nodemon');

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware');
  next(); // Permite a la petición a continuar al siguiente middleware
  // Si no se llama a la función la petición muere sin enviar respuesta
});

app.use((req, res, next) => {
  console.log('In another middleware');

  // Si no se llama a la función debemos devolver una respuesta.
  res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);
