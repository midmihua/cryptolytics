const express = require('express');
const router = express.Router();

const { } = require('./validation/portfolio');
const { GENERIC } = require('./routes');
const { } = require('../controllers/portfolio');

const portfolioRoutes = (authMiddleware) => {

  router.route(GENERIC.ROUTES.PORTFOLIO).get(authMiddleware);
  router.route(GENERIC.ROUTES.PORTFOLIO).post(authMiddleware);
  router.route(GENERIC.ROUTES.PORTFOLIO).put(authMiddleware);
  router.route(GENERIC.ROUTES.PORTFOLIO).delete(authMiddleware);

  return router;
};

module.exports.portfolioRoutes = portfolioRoutes;
