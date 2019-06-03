const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

/**
 * Require controllers
 */
const AuthController = require('../controllers/api/AuthController');

/**
 * Middlewares
 */
router.use(bodyParser.json()); // Parse application/json

/**
 * Auth routes
 */
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);

/**
 * Enable JWT token verification middleware for every API route (other than auth routes)
 */
// router.use(require('../middlewares/verifyJwt'));

/**
 * Routes
 */

module.exports = router;
