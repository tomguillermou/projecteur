const jwt = require('jsonwebtoken');

const User = require('../models/User');

module.exports = {

    viewLogin: (req, res) => {

        res.render('auth/login');
    },

    viewRegister: (req, res) => {

        res.render('auth/register');
    },

    login: async (req, res) => {

        const { email } = req.body;
        const { password } = req.body;

        try {
            const user = await User.findOne().where('email').equals(email).exec();

            if (user && user.comparePassword(password)) {

                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

                // store token in cookies and redirect to homepage
                res.cookie(process.env.JWT_COOKIE_NAME, token);
                res.redirect('/');
                
            } else {
                res.render('auth/login', { error: 'Invalid credentials' });
            }

        } catch (error) {
            res.render('auth/login', { error: 'Internal server error' });
        }
    },

    register: async (req, res) => {

        try {
            const docUser = {
                email: req.body.email,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.lastname
            };

            const user = await User.create(docUser);

            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

            // store JWT in cookies
            res.cookie(process.env.JWT_COOKIE_NAME, token);
            res.redirect('/');

        } catch (error) {
            res.render('auth/register', { error: 'Internal server error' });
        }
    },

    logout: async (req, res) => {

        // remove JWT from cookies and redirect to homepage
        res.clearCookie(process.env.JWT_COOKIE_NAME);
        res.redirect('/');
    },
};
