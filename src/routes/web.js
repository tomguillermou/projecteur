const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const isAuth = require('../middlewares/isAuth');
const redirectIfAuth = require('../middlewares/redirectIfAuth');

/**
 * Require controllers
 */
const IndexController = require('../controllers/web/IndexController');
const AuthController = require('../controllers/web/AuthController');

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

module.exports = router;
