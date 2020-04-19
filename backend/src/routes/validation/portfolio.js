const { body } = require('express-validator');

const { notify } = require('../../utils/notification');

module.exports.validatePortfolioPost = (Portfolio) => {
  return [
    body('portfolio')
      .trim()
      .isLength({ min: 3, max: 255 })
      .withMessage(notify.fieldSymbolsBetween('portfolio', 3, 255))
      .custom((value, { req }) => {
        return Portfolio.findOne({ portfolio: value, user: req.userId })
          .then(document => {
            if (document)
              return Promise.reject(notify.fieldExists('portfolio'));
          });
      }),
    body('exchange')
      .trim()
      .notEmpty()
      .withMessage(notify.enterValidField('exchange')),
    body('description')
      .trim()
      .isLength({ max: 512 })
      .withMessage(notify.fieldSymbolsBetween('description', 0, 512))
  ];
};

module.exports.validatePortfolioPut = () => {
  return [
    body('portfolio')
      .trim()
      .isLength({ min: 3, max: 255 })
      .withMessage(notify.fieldSymbolsBetween('portfolio', 3, 255)),
    body('exchange')
      .trim()
      .notEmpty()
      .withMessage(notify.enterValidField('exchange')),
    body('description')
      .trim()
      .isLength({ max: 512 })
      .withMessage(notify.fieldSymbolsBetween('description', 0, 512))
  ];
};
