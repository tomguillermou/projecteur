const ReadManyRoute = require('../../framework/routes/crud/ReadManyRoute');
const httpHelpers = require('../../framework/helpers/http/index');

const userService = require('../services/userService');

const path = '/api/users';
const middlewares = [];

class Route extends ReadManyRoute {
    // eslint-disable-next-line class-methods-use-this
    async secure(request) {
        console.log('usersFetchAll.js => secure()');
        if (request.query.age) {
            // eslint-disable-next-line max-len
            request.framework.inputs.age = httpHelpers.parseRangeQuery(request.query.age, 0, 100);
        }
        if (request.query.gender && (request.query.gender === 'male' || request.query.gender === 'female')) {
            request.framework.inputs.gender = request.query.gender;
        }
        if (request.query.name) {
            request.framework.inputs.name = request.query.name;
        }
    }
}

module.exports = new Route(path, middlewares, userService);
