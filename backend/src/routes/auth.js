const express = require('express');
const router = express.Router();
const { AUTH } = require('./routes');

router.route(AUTH.BASE + AUTH.ROUTES.LOGIN).get((req, res) => { res.send('OK'); });

module.exports = router;