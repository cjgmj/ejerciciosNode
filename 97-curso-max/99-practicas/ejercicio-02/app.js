const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

app.use((req, res, next) => {
  console.log('Second middleware');
  res.send('<h1>Hello World!</h1>');
});

app.use('/users', (req, res, next) => {
  console.log('Path: /users');
  res.send('<h1>Empty!</h1>');
});

app.use('/', (req, res, next) => {
  console.log('Path: /');
  res.send('<h1>Hello World!</h1>');
});

app.listen(3000);
