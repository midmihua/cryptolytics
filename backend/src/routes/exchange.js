const express = require('express');
const router = express.Router();

const { validateExchangePost, validateExchangePut } = require('./validation/exchange');
const { GENERIC } = require('./routes');
const { getExchange, postExchange, putExchange, deleteExchange } = require('../controllers/exchange');

const exchangeRoutes = (Exchange, authMiddleware) => {

  router.route(GENERIC.ROUTES.EXCHANGE).get(authMiddleware, getExchange);
  router.route(GENERIC.ROUTES.EXCHANGE).post(authMiddleware, validateExchangePost(Exchange), postExchange);
  router.route(`${GENERIC.ROUTES.EXCHANGE}/:id`).get(authMiddleware, getExchange);
  router.route(`${GENERIC.ROUTES.EXCHANGE}/:id`).put(authMiddleware, validateExchangePut(), putExchange);
  router.route(`${GENERIC.ROUTES.EXCHANGE}/:id`).delete(authMiddleware, deleteExchange);

  return router;
};

module.exports.exchangeRoutes = exchangeRoutes;
