const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        session: false,
    }));

module.exports = router;
