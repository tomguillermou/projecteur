/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
const GenericRoute = require('../GenericRoute');

class CreateOneRoute extends GenericRoute {
    constructor(path, middlewares, service) {
        super('post', path, middlewares);
        this.service = service;
    }

    async secure(request) { /* Must be overwrite */ }

    async authorize(request) { /* Must be overwrite */ }

    async process(request) {
        try {
            request.framework.data = await this.service.createOne(request.framework.inputs);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async notify(request) { /* Must be overwrite */ }
}


module.exports = CreateOneRoute;
