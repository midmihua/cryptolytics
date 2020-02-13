module.exports.BadRequest = class extends Error {
    constructor(message = 'Bad Request') {
        super(message);
        this.statusCode = 400;
    }
};

module.exports.Unauthorized = class extends Error {
    constructor(message = 'Unauthorized') {
        super(message);
        this.statusCode = 401;
    }
};

module.exports.ValidationError = class extends Error {
    constructor(message, code, array = [], ...params) {
        super(...params);
        this.message = message;
        this.statusCode = code;
        this.validationErrors = array;
    }
};
