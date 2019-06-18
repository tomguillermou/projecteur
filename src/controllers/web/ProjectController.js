const axios = require('axios');

module.exports = {

    viewCreate: (req, res) => {
        res.render('createProject', { auth: req.isAuth() });
    },

    create: (req, res) => {
        const project = {
            'name': req.body.name,
            'slogan': req.body.slogan,
            'description': req.body.description,
            'members_needed': req.body.members_needed
        };

        const headers = {
            'Authorization': req.cookies.token
        };

        axios.post('http://localhost:5000/api/projects', project, { 'headers': headers })
            .then((response) => {
                res.redirect('/');
            })
            .catch((error) => {
                res.render('createProject', {
                    error: true,
                    errorMessage: error.response.data.message,
                });
            });
    }
};
