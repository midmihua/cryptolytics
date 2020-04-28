module.exports.errorHandling = (err, req, res, next) => {

  let error = err.message;
  let status = err.statusCode ? err.statusCode : 500;

  switch(err.name) {
    case 'JsonWebTokenError' :
      status = 400;
      break;
    case 'CastError':
      status = 404;
      error = 'Incorrect objectId provided';
      break;    
  }

  const message = {
    error,
    description: Array.isArray(error.validationErrors) &&
      error.validationErrors.length > 0 ?
      error.validationErrors : undefined
  };

  res.status(status).json(message);
};
