const HOST = process.env.MONGO_HOST || 'localhost';
const PORT = process.env.MONGO_PORT || 27017;
const DB = process.env.MONGO_DB;
const DB_URI = `mongodb://${HOST}:${PORT}/${DB}`;

const DB_OPTIONS = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};

module.exports = {
    HOST,
    PORT,
    DB,
    DB_URI,
    DB_OPTIONS
};
