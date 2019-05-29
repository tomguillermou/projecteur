const express = require('express');
const bcrypt = require('bcrypt');

const UserService = require('../../services/UserService');

const router = express.Router();
const userService = new UserService();

router.post('/login', async (request, response) => {
    try {
        const inputs = {};

        inputs.email = request.body.email;
        inputs.username = request.body.username;

        if (request.body.password) {
            inputs.hash = bcrypt.hashSync(request.body.password, 10);
        } else {
            throw new Error('Missing password field');
        }

        inputs.gender = request.body.gender;
        inputs.age = request.body.age;

        const result = await userService.createOne(inputs);
        response.status(200).json(result);
    } catch (error) {
        response.status(500).json({
            status: 500,
            error: error.message,
        });
    }
});

module.exports = router;
