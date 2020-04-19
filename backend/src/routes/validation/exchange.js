const { body } = require('express-validator');

const { notify } = require('../../utils/notification');

module.exports.validateExchangePost = (Exchange) => {
  return [
    body('exchange')
      .trim()
      .isLength({ min: 3, max: 50 })
      .withMessage(notify.fieldSymbolsBetween('exchange', 3, 50))
      .custom((value, { req }) => {
        return Exchange.findOne({ exchange: value })
          .then(document => {
            if (document)
              return Promise.reject(notify.fieldExists('exchange'));
          });
      }),
    body('url')
      .trim()
      .isURL()
      .withMessage(notify.enterValidField('url')),
    body('user')
      .trim()
      .notEmpty()
      .withMessage(notify.enterValidField('user')),
    body('description')
      .trim()
      .isLength({ max: 512 })
      .withMessage(notify.fieldSymbolsBetween('description', 0, 512))
  ];
};

module.exports.validateExchangePut = () => {
  return [
    body('exchange')
      .trim()
      .isLength({ min: 3, max: 50 })
      .withMessage(notify.fieldSymbolsBetween('exchange', 3, 50)),
    body('url')
      .trim()
      .isURL()
      .withMessage(notify.enterValidField('url')),
    body('description')
      .trim()
      .isLength({ max: 512 })
      .withMessage(notify.fieldSymbolsBetween('description', 0, 512))
  ];
};
