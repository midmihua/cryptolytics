require('dotenv-extended').load();

const db = require('./services/db');
const { createApp } = require('./services/app');
const { APP_PORT } = require('./config');

// Necessary app options
const { authRoutes } = require('./routes/auth');
const { incorrectRoute } = require('./routes/404');
const { logging } = require('./services/logging');
const { errorHandling } = require('./middleware/errorHandling');

// Lists of routes
const routes = [
    authRoutes,
    incorrectRoute // should be final in the list
];

// Init app instance
const app = createApp({
    routes,
    logging,
    errorHandling
});

// Connect to database and start app
let server;
let uri;

db.connect()
    .then((response, error) => {
        if (error)
            throw new Error(error);

        uri = response.uri;
        server = app.listen(APP_PORT, () => {
            console.log(`Listening on ${APP_PORT}`);
            console.log(`ENV: ${process.env.NODE_ENV}`);
            console.log(`MONGO: ${uri}`);
        });
    });

// Shutdown
const stopHandler = () => {
    db && db.close()
        .then((response) => {
            console.log(`MONGO connection closed on: ${response && response.uri ? response.uri : uri}`);
        });

    server && server.close(() => {
        console.log(`Server stopped on ${APP_PORT}`);
    });
};

// Exit events listener
process.on('SIGTERM', stopHandler);
process.on('SIGINT', stopHandler);
