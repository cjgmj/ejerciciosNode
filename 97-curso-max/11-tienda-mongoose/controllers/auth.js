const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie').split('=')[1] == 'true';

  console.log(req.session.isLoggedIn);

  // Esta ruta se tiene que corresponder con el fichero pug
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  // res.setHeader('Set-Cookie', 'loggedIn=true; HttpOnly');

  User.findById('603e47230cb9392c3875169c')
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;

      res.redirect('/');
    })
    .catch((err) => console.log(err));
};
