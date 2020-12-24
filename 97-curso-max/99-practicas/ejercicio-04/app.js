const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = [];

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'Add User' });
});

app.get('/users', (req, res, next) => {
  res.render('users', { pageTitle: 'Users', users });
});

app.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.user });
  res.redirect('/users');
});

app.listen(3000);
