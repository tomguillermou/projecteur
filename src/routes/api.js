const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const verifyAuthorization = require('@middlewares/verifyAuthorization');

const AuthController = require('@controllers/api/AuthController');
const ProjectController = require('@controllers/api/ProjectController');

/**
 * Middlewares
 */
router.use(bodyParser.json()); // Parse application/json

/**
 * Routes
 */
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);

router.use(verifyAuthorization());

router.post('/projects', ProjectController.create);

module.exports = router;
