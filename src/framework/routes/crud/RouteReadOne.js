/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import GenericRoute from '../GenericRoute';

export default class RouteReadOne extends GenericRoute {
    constructor(path, middlewares, service) {
        super('get', path, middlewares);
        this.service = service;
    }

    getInputs(request) {
        const inputs = {
            _id: request.params.id,
        };

        return inputs;
    }

    async process(request) {
        try {
            const inputs = this.getInputs(request);
            const result = await this.service.readOne(inputs);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
