const Project = require('@models/Project');

module.exports = {

    create: (req, res) => {
        console.log(req.body);

        const project = {
            'name': req.body.name,
            'slogan': req.body.slogan,
            'description': req.body.description,
            'members_needed': req.body.members_needed,
            'creator': req.authUserId
        };

        Project.create(project, (err, projectCreated) => {
            if (err) {
                console.log(err);
                res.status(500).json({ 'message': 'Internal server error' });
            } else {
                console.log(projectCreated);
                res.status(200).json({ 'message': 'Project created' });
            }
        });
    },

    read: (req, res) => {

    },

    update: (req, res) => {

    },

    delete: (req, res) => {

    }
};
