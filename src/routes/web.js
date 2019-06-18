const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const isAuth = require('@middlewares/isAuth');
const redirectIfAuth = require('@middlewares/redirectIfAuth');

const IndexController = require('@controllers/web/IndexController');
const AuthController = require('@controllers/web/AuthController');
const ProjectController = require('@controllers/web/ProjectController');

/**
 * Middlewares
 */
router.use(bodyParser.urlencoded({ extended: true }));
router.use(isAuth());

/**
 * Routes
 */
router.get('/', IndexController.view);

router.get('/login', redirectIfAuth(), AuthController.viewLogin);
router.post('/login', AuthController.login);
router.get('/register', redirectIfAuth(), AuthController.viewRegister);
router.post('/register', AuthController.register);
router.get('/logout', AuthController.logout);

router.get('/create-project', ProjectController.viewCreate);
router.post('/test', ProjectController.create);

module.exports = router;
