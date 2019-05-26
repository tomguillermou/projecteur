import RouteReadMany from '../../../framework/routes/crud/RouteReadMany';

const httpHelpers = require('../../../framework/helpers/http/index');

const userService = require('../../services/userService');

class Route extends RouteReadMany {
    getInputs(request) {
        const inputs = {};

        if (request.query.username) {
            inputs.username = request.query.username;
        }
        if (request.query.age) {
            inputs.age = httpHelpers.parseRangeQuery(request.query.age, 0, 100);
        }
        if (request.query.gender && (request.query.gender === 'male' || request.query.gender === 'female')) {
            inputs.gender = request.query.gender;
        }

        return inputs;
    }
}

module.exports = new Route('/users', [], userService);
