exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.get('Cookie').split('=')[1];

  // Esta ruta se tiene que corresponder con el fichero pug
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader('Set-Cookie', 'loggedIn=true');

  res.redirect('/');
};
