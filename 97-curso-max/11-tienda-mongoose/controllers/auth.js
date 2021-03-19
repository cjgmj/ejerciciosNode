const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const User = require('../models/user');

const transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '',
    pass: '',
  },
});
exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie').split('=')[1] == 'true';

  // console.log(req.session.isLoggedIn);

  // Esta ruta se tiene que corresponder con el fichero pug
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: req.flash('error'),
  });
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: req.flash('error'),
  });
};

exports.postLogin = (req, res, next) => {
  // res.setHeader('Set-Cookie', 'loggedIn=true; HttpOnly');

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        req.flash('error', 'Invalid email or password.');
        return res.redirect('/login');
      }

      // Primer argumento texto plano, segundo argumento texto hasheado
      bcrypt
        .compare(password, user.password)
        .then((doMatch) => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;

            // Aseguramos que la sesión esté guardada antes de la redirección
            return req.session.save(() => {
              res.redirect('/');
            });
          }

          req.flash('error', 'Invalid email or password.');
          res.redirect('/login');
        })
        .catch((err) => {
          console.log(err);
          req.flash('error', 'Invalid email or password.');
          res.redirect('/login');
        });
    })
    .catch((err) => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  User.findOne({ email })
    .then((userDoc) => {
      if (userDoc) {
        req.flash(
          'error',
          'E-Mail exists alrady, please pick a different one.'
        );
        return res.redirect('/signup');
      }

      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            email,
            password: hashedPassword,
            cart: { items: [] },
          });

          return user.save();
        })
        .then(() => {
          res.redirect('/login');
          return transporter.sendMail({
            to: email,
            from: 'info@shop.com',
            subject: 'Signup succeeded!',
            html: '<h1>You successfully signed up!</h1>',
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};
