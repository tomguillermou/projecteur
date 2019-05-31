const _ = require('lodash');

module.exports = {

    viewLogin: (req, res) => {
        res.render('login', { title: 'Login' });
    },

    login: (req, res) => {
        console.log('Trying to login');
    },

    viewRegister: (req, res) => {
        res.render('register', { title: 'Register', error: false });
    },

    register: (req, res) => {
        console.log(req.body);

        if (_.isEmpty(req.body)) {
            console.log('error');
            res.render('register', { title: 'Register', error: true });
        } else {
            console.log('no error');
            res.render('register', { title: 'Register', error: false });
        }
    },
};
