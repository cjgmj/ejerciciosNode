const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGOBD_URI =
  'mongodb+srv://node:dqoOedTlawu9fJI4@cluster0.a2uzr.mongodb.net/shop?retryWrites=true&w=majority';

const app = express();

const store = new MongoDBStore({
  uri: MONGOBD_URI,
  collection: 'sessions',
});

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

app.use((req, res, next) => {
  User.findById('603e47230cb9392c3875169c')
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

// Lo hace para las peticiones no al arrancar el servidor
app.use((req, res, next) => {
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

// El path no es el absoluto, se indica que debe comenzar por el especificado
// Es importante el orden de los middleware porque se ejecutan de arriba hacia abajo
app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

mongoose
  .connect(MONGOBD_URI)
  .then(() => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: 'cjgmj',
          email: 'cjgmj@test.com',
          cart: { items: [] },
        });
        user.save();
      }
    });

    app.listen(3000);
  })
  .catch((err) => console.log(err));
