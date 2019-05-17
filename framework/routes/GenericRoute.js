/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

class GenericRoute {
    constructor(method, path, middlewares) {
        this.method = method;
        this.path = path;
        this.middlewares = middlewares;
    }

    async secure(request) { /* Must be overwrite */ }

    async authorize(request) { /* Must be overwrite */ }

    async process(request) { /* Must be overwrite */ }

    async notify(request) { /* Must be overwrite */ }
}

module.exports = GenericRoute;
