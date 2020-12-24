const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// La extensión de los archivos tiene que ser el mismo nombre indicado aquí
app.engine(
  'hbs',
  expressHbs({
    extname: 'hbs',
    defaultLayout: '',
    layoutsDir: '',
  })
);
app.set('view engine', 'hbs');
app.set('views', 'views-handlebars');

const adminData = require('./routes-handlebars/admin');
const shopRoutes = require('./routes-handlebars/shop');

// Middleware para parsear el cuerpo de las peticiones
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Cada vez que se busque un archivo css, js o imágenes se sitúa en la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

// El path no es el absoluto, se indica que debe comenzar por el especificado
// Es importante el orden de los middleware porque se ejecutan de arriba hacia abajo
app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

app.listen(3000);
