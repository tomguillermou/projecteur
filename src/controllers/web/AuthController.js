// const _ = require('lodash');
const axios = require('axios');

module.exports = {

    viewLogin: (req, res) => {
        res.render('login', { title: 'Login', error: false });
    },

    viewRegister: (req, res) => {
        res.render('register', { title: 'Register', error: false });
    },

    login: (req, res) => {
        console.log(req.body);

        axios.post('http://localhost:5000/api/auth/login', req.body)
            .then((response) => {
                // store token in cookies
                res.cookie('token', response.data.token);
                res.redirect('/');
            })
            .catch((error) => {
                console.log(error.response.data);
                res.render('login', {
                    title: 'Login',
                    error: true,
                    errorMessage: error.response.data.message,
                });
            });
    },

    register: (req, res) => {
        if (req.body.password !== req.body.confirmPassword) {
            res.render('register', {
                title: 'Register',
                error: true,
                errorMessage: 'Password confirmation does not match password',
            });
        } else {
            if (req.body.male === 'on') {
                req.body.gender = 'male';
                delete req.body.male;
            } else if (req.body.female === 'on') {
                req.body.gender = 'female';
                delete req.body.female;
            }

            delete req.body.confirmPassword;

            axios.post('http://localhost:5000/api/auth/register', req.body)
                .then((response) => {
                    // store token in cookies
                    res.cookie('token', response.data.token);
                    res.redirect('/');
                })
                .catch((error) => {
                    console.log(error.response.data);
                    res.render('register', {
                        title: 'Register',
                        error: true,
                        errorMessage: error.response.data.message,
                    });
                });
        }
    },
};
