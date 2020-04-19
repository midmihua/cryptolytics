const express = require('express');
const router = express.Router();

const { validatePortfolioPost, validatePortfolioPut } = require('./validation/portfolio');
const { GENERIC } = require('./routes');
const { getPortfolio, postPortfolio, putPortfolio, deletePortfolio } = require('../controllers/portfolio');

const portfolioRoutes = (Portfolio, authMiddleware) => {

  router.route(GENERIC.ROUTES.PORTFOLIO).get(authMiddleware, getPortfolio);
  router.route(GENERIC.ROUTES.PORTFOLIO).post(authMiddleware, validatePortfolioPost(Portfolio), postPortfolio);
  router.route(`${GENERIC.ROUTES.PORTFOLIO}/:id`).put(authMiddleware, validatePortfolioPut(), putPortfolio);
  router.route(`${GENERIC.ROUTES.PORTFOLIO}/:id`).delete(authMiddleware, deletePortfolio);

  return router;
};

module.exports.portfolioRoutes = portfolioRoutes;
