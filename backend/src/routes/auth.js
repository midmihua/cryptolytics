const express = require('express');
const router = express.Router();

// TBD: refactoring needed (implement DI pattern)
const { isAuthenticated } = require('../middleware/isAuthenticated');
const { validatePut, validatePost } = require('./validation/auth');
const User = require('../models/user');
//----------------------------------------------

const { AUTH } = require('./routes');
const { signup, login, me } = require('../controllers/auth');

router.route(AUTH.ROUTES.SIGNUP).post(validatePut(User), signup);

router.route(AUTH.ROUTES.LOGIN).post(validatePost(), login);

router.route(AUTH.ROUTES.ME).get(isAuthenticated, me);

module.exports.authRoutes = router;
