const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

/**
 * Require controllers
 */
const AuthController = require('../controllers/web/AuthController');

/**
 * Middlewares
 */
router.use(bodyParser.urlencoded({ extended: true }));
// router.use(require('../middlewares/verifyJwt')); // JWT token verification

/**
 * Routes
 */
router.get('/login', AuthController.viewLogin);
router.post('/login', AuthController.login);
router.get('/register', AuthController.viewRegister);
router.post('/register', AuthController.register);

module.exports = router;
