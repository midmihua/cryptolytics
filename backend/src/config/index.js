const { APP_PORT, JSON_LIMIT } = require('./app');

const { HOST, PORT, DB, DB_URI, DB_OPTIONS } = require('./db');

const { FILE_NAME, FILE_PATH } = require('./logging');

module.exports = {
    APP_PORT,
    JSON_LIMIT,
    HOST,
    PORT,
    DB,
    DB_URI,
    DB_OPTIONS,
    FILE_NAME,
    FILE_PATH
};
