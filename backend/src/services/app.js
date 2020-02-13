const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');

const { JSON_LIMIT } = require('../config');

module.exports.createApp = (options) => {

    const {
        authRoutes,
        incorrectRoute,
        logging,
        errorHandling
    } = options;

    const app = express();

    // application/json data
    app.use(bodyParser.json({
        limit: JSON_LIMIT
    }));

    // CORS (cross origin resource sharing)
    // This middleware must be set up before route configuration
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, X-Requested-With, Accept');
        next();
    });

    // Helmet helps you secure your Express apps by setting various HTTP headers.
    app.use(helmet());

    // Middleware to compress the traffic (to have a better performance)
    app.use(compression());

    // Requests logging in case of local env
    app.use(logging());

    // Routes
    app.use(authRoutes);
    app.use(incorrectRoute);

    // Error-handling middleware
    app.use(errorHandling);

    return app;
};
