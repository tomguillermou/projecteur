/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import GenericRoute from '../GenericRoute';

export default class RouteCreateOne extends GenericRoute {
    constructor(path, middlewares, service) {
        super('post', path, middlewares);
        this.service = service;
    }

    getInputs(request) { /* Must be overwrite */ }

    async process(request) {
        try {
            const inputs = this.getInputs(request);
            const result = await this.service.createOne(inputs);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
