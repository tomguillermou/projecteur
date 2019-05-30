const express = require('express');

const router = express.Router();

/**
 * Require controllers
 */
const AuthController = require('../controllers/api/AuthController');

/**
 * Routes
 */
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);

module.exports = router;
