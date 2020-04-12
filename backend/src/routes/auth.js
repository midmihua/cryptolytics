const express = require('express');
const router = express.Router();

const { validateSignUp, validateLogin } = require('./validation/auth');
const { AUTH } = require('./routes');
const { signup, login, me } = require('../controllers/auth');

const authRoutes = (userModel, authMiddleware) => {

  router.route(AUTH.ROUTES.SIGNUP).post(validateSignUp(userModel), signup);
  router.route(AUTH.ROUTES.LOGIN).post(validateLogin(), login);
  router.route(AUTH.ROUTES.ME).get(authMiddleware, me);

  return router;
};

module.exports.authRoutes = authRoutes;
