const mongoDbErrorMessage = ({codeName, keyValue}) => {
  switch (codeName) {
    case 'DuplicateKey':
      return [409, `Value already exists in database: ${JSON.stringify(keyValue)}`];
    default:
      return [400, 'MongoError occured'];
  }
};

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
    case 'MongoError':
      [status, error] = mongoDbErrorMessage(err);
      break;
  }

  const message = {
    error,
    description: Array.isArray(err.validationErrors) &&
    err.validationErrors.length > 0 ?
    err.validationErrors : undefined
  };

  res.status(status).json(message);
};
