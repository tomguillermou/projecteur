const CreateOneRoute = require('../../framework/routes/crud/CreateOneRoute');

const userService = require('../services/userService');

const path = '/api/users';
const middlewares = [];

class Route extends CreateOneRoute {
    // eslint-disable-next-line class-methods-use-this
    async secure(request) {
        request.framework.inputs = {
            email: request.body.email,
            password: request.body.password,
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            age: request.body.age,
            gender: request.body.gender,
        };
    }
}

module.exports = new Route(path, middlewares, userService);
