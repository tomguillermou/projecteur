const express = require('express');

const router = express.Router();

/**
 * Require controllers
 */
const TestController = require('../controllers/web/TestController');

/**
 * Routes
 */
router.get('/test', TestController.test);

module.exports = router;
