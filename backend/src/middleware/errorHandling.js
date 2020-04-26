module.exports.errorHandling = (error, req, res, next) => {

  let status = error.statusCode ? error.statusCode : 500;

  if (error.name === 'JsonWebTokenError' || error.name === 'CastError')
    status = 400;

  const message = {
    message: error.message,
    errors: Array.isArray(error.validationErrors) &&
      error.validationErrors.length > 0 ?
      error.validationErrors : undefined
  };

  res.status(status).json(message);
};
