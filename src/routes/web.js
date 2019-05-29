const express = require('express');

const router = express.Router();

/**
 * Require controllers
 */
const AuthController = require('../controllers/AuthController');

/**
 * Routes
 */
router.get('/login', AuthController.login);

module.exports = router;
