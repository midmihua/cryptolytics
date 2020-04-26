const { body } = require('express-validator');

const { notify } = require('../../utils/notification');

module.exports.validatePortfolioPost = (Portfolio) => {
  return [
    body('name')
      .trim()
      .isLength({ min: 3, max: 255 })
      .withMessage(notify.fieldSymbolsBetween('name', 3, 255))
      .custom((value, { req }) => {
        return Portfolio.findOne({ name: value, user: req.userId })
          .then(document => {
            if (document)
              return Promise.reject(notify.fieldExists('name'));
          });
      }),
    body('exchangeId')
      .trim()
      .notEmpty()
      .withMessage(notify.enterValidField('exchangeId')),
    body('description')
      .trim()
      .isLength({ max: 512 })
      .withMessage(notify.fieldSymbolsBetween('description', 0, 512))
  ];
};

module.exports.validatePortfolioPut = () => {
  return [
    body('name')
      .trim()
      .isLength({ min: 3, max: 255 })
      .withMessage(notify.fieldSymbolsBetween('name', 3, 255)),
    body('exchangeId')
      .trim()
      .notEmpty()
      .withMessage(notify.enterValidField('exchangeId')),
    body('description')
      .trim()
      .isLength({ max: 512 })
      .withMessage(notify.fieldSymbolsBetween('description', 0, 512))
  ];
};
