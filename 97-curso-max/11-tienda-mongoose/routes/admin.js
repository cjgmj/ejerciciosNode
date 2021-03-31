const express = require('express');
const { body } = require('express-validator/check');

const adminController = require('../controllers/admin');

const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/edit-product => GET
router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

// /admin/add-product => POST
router.post(
  '/add-product',
  isAuth,
  [
    body('title', 'Title has to be valid.')
      .isAlphanumeric()
      .isLength({ min: 3 })
      .trim(),
    // body('imageUrl', 'Image URL has to be valid.').isURL(),
    body('price', 'Price has to be valid.').isFloat(),
    body('description', 'Description has to be valid.')
      .isLength({ min: 5, max: 400 })
      .trim(),
  ],
  adminController.postAddProduct
);

// /admin/edit-product => POST
router.post(
  '/edit-product',
  isAuth,
  [
    body('title', 'Title has to be valid.')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('imageUrl', 'Image URL has to be valid.').isURL(),
    body('price', 'Price has to be valid.').isFloat(),
    body('description', 'Description has to be valid.')
      .isLength({ min: 5, max: 400 })
      .trim(),
  ],
  adminController.postEditProduct
);

// /admin/delete-product => POST
router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
