const { reset } = require('nodemon');

exports.getLogin = (req, res, next) => {
  // Esta ruta se tiene que corresponder con el fichero pug
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
  });
};
