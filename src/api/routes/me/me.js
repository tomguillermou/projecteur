import GenericRoute from '../../../framework/routes/GenericRoute';

const userService = require('../../services/userService');

class Route extends GenericRoute {
    getInputs(request) {
        if (!request.auth_user_id) {
            throw new Error('No token provided');
        }

        const inputs = {
            _id: request.auth_user_id,
        };

        return inputs;
    }

    async process(request) {
        try {
            const inputs = this.getInputs(request);
            const result = await userService.readOne(inputs);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new Route('get', '/me', []);
