const express = require('express');

const router = express.Router();

const isAuth = require('@middlewares/isAuth');
const redirectIfAuth = require('@middlewares/redirectIfAuthenticated');

const IndexController = require('@controllers/IndexController');
const AuthController = require('@controllers/AuthController');
const ProjectController = require('@controllers/ProjectController');

/**
 * Middlewares
 */
router.use(isAuth);

/**
 * Routes
 */
router.get('/', IndexController.view);

// Auth
router.get('/login', redirectIfAuth, AuthController.viewLogin);
router.post('/login', AuthController.login);
router.get('/register', redirectIfAuth, AuthController.viewRegister);
router.post('/register', AuthController.register);
router.get('/logout', AuthController.logout);

// Projects
router.get('/create-project', ProjectController.viewCreate);

module.exports = router;
