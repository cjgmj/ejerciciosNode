exports.getProducts = (req, res, next) => {};

exports.getProduct = (req, res, next) => {};

exports.getIndex = (req, res, next) => {};

exports.getCart = (req, res, next) => {};

exports.postCart = (req, res, next) => {};

exports.postCartDeleteProduct = (req, res, next) => {};

exports.postOrder = (req, res, next) => {};

exports.getOrders = (req, res, next) => {};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout',
  });
};
