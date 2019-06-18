const axios = require('axios');

module.exports = {

    viewLogin: (req, res) => {
        res.render('auth/login', { error: false });
    },

    viewRegister: (req, res) => {
        res.render('auth/register', { error: false });
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
                res.render('auth/login', {
                    error: true,
                    errorMessage: error.response.data.message,
                });
            });
    },

    register: (req, res) => {
        const user = {
            'email': req.body.email,
            'password': req.body.password,
            'firstname': req.body.firstname,
            'lastname': req.body.lastname,
            'gender': req.body.gender,
        };

        axios.post('http://localhost:5000/api/auth/register', user)
            .then((response) => {
                // store token in cookies
                res.cookie('token', response.data.token);
                res.redirect('/');
            })
            .catch((error) => {
                console.log(error.response.data);
                res.render('auth/register', {
                    error: true,
                    errorMessage: error.response.data.message,
                });
            });
    },

    logout: (req, res) => {
        res.clearCookie('token');
        res.redirect('/');
    },
};
