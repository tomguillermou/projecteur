import RouteReadMany from '../../framework/routes/crud/RouteReadMany';
import { rangeParser } from '../../framework/helpers/http';
import UserService from '../../services/UserService';

const userService = new UserService();

class Route extends RouteReadMany {
    getInputs(request) {
        const inputs = {};

        if (request.query.username) {
            inputs.username = request.query.username;
        }
        if (request.query.age) {
            inputs.age = rangeParser(request.query.age, 0, 100);
        }
        if (request.query.gender && (request.query.gender === 'male' || request.query.gender === 'female')) {
            inputs.gender = request.query.gender;
        }

        return inputs;
    }
}

module.exports = new Route('/users', [], userService);
