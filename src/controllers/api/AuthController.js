const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

module.exports = {

    // login
    login: (req, res) => {
        const { email } = req.body;
        const { password } = req.body;

        User.findOne({ email }, (err, user) => {
            if (err) {
                res.status(500).json({ message: err.message });
            } else if (_.isEmpty(user)) {
                res.status(500).json({ message: 'Invalid email/password' });
            } else if (bcrypt.compareSync(password, user.hash)) {
                // eslint-disable-next-line no-underscore-dangle
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
                res.status(200).json({ token });
            } else {
                res.status(500).json({ message: 'Invalid email/password' });
            }
        });
    },

    // register
    register: (req, res) => {
        console.log('Incoming register request');

        const hash = bcrypt.hashSync(req.body.password, 10);

        const doc = {
            email: req.body.email,
            hash,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
            age: req.body.age,
        };

        User.create(doc, (err, user) => {
            if (err) {
                res.status(500).json({ message: err.message });
            } else {
                res.status(200).json(user);
            }
        });
    },
};
