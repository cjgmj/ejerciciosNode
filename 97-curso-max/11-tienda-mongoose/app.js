const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const csrf = require('csurf');

const flash = require('connect-flash');

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGOBD_URI =
  'mongodb+srv://node:dqoOedTlawu9fJI4@cluster0.a2uzr.mongodb.net/shop?retryWrites=true&w=majority';

const app = express();

const store = new MongoDBStore({
  uri: MONGOBD_URI,
  collection: 'sessions',
});

const csrfProtection = csrf();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

// Middleware para parsear el cuerpo de las peticiones
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Cada vez que se busque un archivo css, js o imágenes se sitúa en la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use(csrfProtection);

app.use(flash());

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }

  User.findById(req.session.user._id)
    .then((user) => {
      if (!user) {
        return next();
      }

      req.user = user;
      next();
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// Lo hace para las peticiones no al arrancar el servidor
// app.use((req, res, next) => {
//   next();
// });

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();

  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use('/500', errorController.get500);
app.use(errorController.get404);

// El path no es el absoluto, se indica que debe comenzar por el especificado
// Es importante el orden de los middleware porque se ejecutan de arriba hacia abajo
app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

mongoose
  .connect(MONGOBD_URI)
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
