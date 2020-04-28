const { validationResult } = require('express-validator');

const { ValidationError } = require('../errors');
const { notify } = require('../utils/notification');
const Exchange = require('../models/exchange');

const getExchange = async (req, res, next) => {
  try {
    const { id } = req.params;
    const collection = id ? await Exchange.findById(id) : await Exchange.find();

    if (!collection)
      throw new ValidationError(notify.collectionNotFetched('Exchange'), 404);

    return res.status(200).json(collection);
  } catch (error) {
    return next(error);
  }
};

const postExchange = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const error = new ValidationError(notify.generalIncorrectData(), 422, errors.array());
      return next(error);
    }

    const { name, url, description } = req.body;
    const newExchange = new Exchange({
      name,
      url,
      user: req.userId,
      description
    });

    const result = await newExchange.save();
    if (!result) {
      const error = new ValidationError(notify.entityNotCreated('Exchange'), 404);
      return next(error);
    }

    return res.status(201).json({
      message: notify.entityCreated('Exchange'),
      result
    });

  } catch (error) {
    return next(error);
  }
};

const putExchange = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new ValidationError(notify.generalIncorrectData(), 422, errors.array());
      return next(error);
    }

    const { id } = req.params;
    if (!id)
      throw new ValidationError(notify.enterValidField('exchange._id'), 404);

    const exchange = await Exchange.findById(id);
    if (!exchange)
      throw new ValidationError(notify.entityNotFound('Exchange'), 404);
    
    const result = await Exchange.findByIdAndUpdate(id, req.body, {new: true});
    if (!result)
      throw new ValidationError(notify.entityNotUpdated('Exchange'), 404);

    return res.status(200).json({
      message: notify.entityUpdated('Exchange'),
      result
    });

  } catch (error) {
    return next(error);
  }
};

const deleteExchange = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id)
      throw new ValidationError(notify.enterValidField('exchange._id'), 404);

    const exchangeToDelete = await Exchange.findById(id);
    if (!exchangeToDelete)
      throw new ValidationError(notify.entityNotFound('Exchange'), 404);

    const result = await Exchange.findByIdAndRemove(id);
    if (!result)
      throw new ValidationError(notify.entityNotRemoved('Exchange'), 404);

    return res.status(200).json({
      message: notify.entityRemoved('Exchange'),
      result
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getExchange,
  postExchange,
  putExchange,
  deleteExchange
};
