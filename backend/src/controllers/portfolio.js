const { validationResult } = require('express-validator');

const { ValidationError } = require('../errors');
const { notify } = require('../utils/notification');
const Portfolio = require('../models/portfolio');

const getPortfolio = async (req, res, next) => {
  try {
    const { id } = req.params;
    const collection = id
      ? await Portfolio.findOne({ user: req.userId, _id: id })
      : await Portfolio.find({ user: req.userId });

    if (!collection)
      throw new ValidationError(notify.collectionNotFetched('Portfolio'), 404);

    return res.status(200).json(collection);
  } catch (error) {
    return next(error);
  }
};

const postPortfolio = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const error = new ValidationError(notify.generalIncorrectData(), 422, errors.array());
      return next(error);
    }

    const { name, exchangeId, description } = req.body;
    const newPortfolio = new Portfolio({
      name,
      exchangeId,
      user: req.userId,
      description
    });

    const result = await newPortfolio.save();

    if (!result) {
      const error = new ValidationError(notify.entityNotCreated('Portfolio'), 404);
      return next(error);
    }

    return res.status(201).json({
      message: notify.entityCreated('Portfolio'),
      result
    });

  } catch (error) {
    return next(error);
  }
};

const putPortfolio = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new ValidationError(notify.generalIncorrectData(), 422, errors.array());
      return next(error);
    }

    const { id } = req.params;
    if (!id)
      throw new ValidationError(notify.enterValidField('portfolio._id'), 404);

    const portfolio = await Portfolio.findById(id);
    if (!portfolio)
      throw new ValidationError(notify.entityNotFound('Portfolio'), 404);

    const result = await Portfolio.findByIdAndUpdate(id, req.body, {new: true});
    if (!result)
      throw new ValidationError(notify.entityNotUpdated('Portfolio'), 404);

    return res.status(200).json({
      message: notify.entityUpdated('Portfolio'),
      result
    });

  } catch (error) {
    return next(error);
  }
};

const deletePortfolio = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id)
      throw new ValidationError(notify.enterValidField('portfolio._id'), 404);

    const portfolioToDelete = await Portfolio.findById(id);
    if (!portfolioToDelete)
      throw new ValidationError(notify.entityNotFound('Portfolio'), 404);

    const result = await Portfolio.findByIdAndRemove(id);
    if (!result)
      throw new ValidationError(notify.entityNotRemoved('Portfolio'), 404);

    return res.status(200).json({
      message: notify.entityRemoved('Portfolio'),
      result
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getPortfolio,
  postPortfolio,
  putPortfolio,
  deletePortfolio
};
