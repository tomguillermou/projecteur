const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

module.exports = new LocalStrategy(
    (username, password, done) => {
        User.findOne({ username }, (error, user) => {
            if (error) {
                return done(error);
            }

            if (!user) {
                return done(null, false);
            }

            if (!bcrypt.compareSync(password, user.hash)) {
                return done(null, false);
            }

            return done(null, user);
        });
    },
);
