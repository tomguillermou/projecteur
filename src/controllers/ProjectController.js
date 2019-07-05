const Project = require('@models/Project');

module.exports = {

    viewCreate: (req, res) => {

        res.render('createProject', { auth: req.isAuth() });
    },

    create: (req, res) => {

        const project = {
            name: req.body.name,
            slogan: req.body.slogan,
            description: req.body.description,
            members_needed: req.body.members_needed,
            creator: req.authUserId
        };

        Project.create(project, (err) => {
            if (err) {
                console.log(err);
                res.render('createProject', { error: 'Internal server error' });
            } else {
                res.redirect('/');
            }
        });
    }
};
