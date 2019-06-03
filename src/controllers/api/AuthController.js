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
                res.status(500).json({ message: 'Internal server error' });
            } else if (_.isEmpty(user)) {
                res.status(500).json({ message: 'Invalid email or password' });
            } else if (bcrypt.compareSync(password, user.hash)) {
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
                res.status(200).json({ token });
            } else {
                res.status(500).json({ message: 'Invalid email or password' });
            }
        });
    },

    // register
    register: (req, res) => {
        console.log(req.body);
        const hash = bcrypt.hashSync(req.body.password, 10);

        const doc = {
            email: req.body.email,
            hash,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
        };

        User.create(doc, (err, user) => {
            if (err) {
                if (err.name === 'ValidationError') {
                    res.status(500).json({ message: 'This email is already used' });
                } else {
                    res.status(500).json({ message: 'Internal server error' });
                }
            } else {
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
                res.status(200).json({ token });
            }
        });
    },
};
