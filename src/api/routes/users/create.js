import RouteCreateOne from '../../../framework/routes/crud/RouteCreateOne';

const userService = require('../../services/userService');

class Route extends RouteCreateOne {
    getInputs(request) {
        const inputs = {
            email: request.body.email,
            username: request.body.username,
            gender: request.body.gender,
            age: request.body.age,
        };

        return inputs;
    }
}

module.exports = new Route('/users', [], userService);
