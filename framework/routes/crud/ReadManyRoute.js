/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
const GenericRoute = require('../GenericRoute');

class ReadManyRoute extends GenericRoute {
    constructor(path, middlewares, service) {
        super('get', path, middlewares);
        this.service = service;
    }

    async secure(request) { /* Must be overwrite */ }

    async authorize(request) { /* Must be overwrite */ }

    async process(request) {
        try {
            request.framework.data = await this.service.readMany(request.framework.inputs);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async notify(request) { /* Must be overwrite */ }
}


module.exports = ReadManyRoute;
