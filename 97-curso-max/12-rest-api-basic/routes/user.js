const express = require('express');
const { body } = require('express-validator');

const userController = require('../controllers/user');

const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/status', isAuth, userController.getStatus);

router.patch(
  '/status',
  isAuth,
  [body('status').trim().not().isEmpty()],
  userController.updateUserStatus
);

module.exports = router;
