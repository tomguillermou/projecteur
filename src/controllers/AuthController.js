const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('@models/User');

module.exports = {


    viewLogin: (req, res) => {

        res.render('auth/login');
    },


    viewRegister: (req, res) => {

        res.render('auth/register');
    },


    login: (req, res) => {

        const { email } = req.body;
        const { password } = req.body;

        User.findOne({ email }, (err, user) => {

            if (err) {
                res.render('auth/login', { error: 'Internal server error' });

            } else if (_.isEmpty(user)) {
                res.render('auth/login', { error: 'Invalid email or password' });

            } else if (bcrypt.compareSync(password, user.hash)) {
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
                // store token in cookies
                res.cookie(process.env.JWT_COOKIE_NAME, token);
                res.redirect('/');

            } else {
                res.render('auth/login', { error: 'Invalid email or password' });
            }
        });
    },


    register: (req, res) => {

        const hash = bcrypt.hashSync(req.body.password, 10);

        const user = {
            email: req.body.email,
            hash,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
        };

        User.create(user, (err, userCreated) => {

            if (err) {

                if (err.name === 'ValidationError') {
                    res.render('auth/register', { error: 'This email is already used' });

                } else {
                    res.render('auth/register', { error: 'Internal server error' });
                }

            } else {
                const token = jwt.sign({ userId: userCreated._id }, process.env.JWT_SECRET);
                // store token in cookies
                res.cookie(process.env.JWT_COOKIE_NAME, token);
                res.redirect('/');
            }
        });
    },


    logout: (req, res) => {

        res.clearCookie('token');
        res.redirect('/');
    },
};
