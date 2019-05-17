/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
const GenericRoute = require('../GenericRoute');

class ReadOneRoute extends GenericRoute {
    constructor(path, middlewares, service) {
        super('get', path, middlewares);
        this.service = service;
    }

    async secure(request) {
        request.framework.inputs = request.params.id;
    }

    async authorize(request) { /* Must be overwrite */ }

    async process(request) {
        try {
            request.framework.data = await this.service.readOne(request.framework.inputs);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async notify(request) { /* Must be overwrite */ }
}


module.exports = ReadOneRoute;
