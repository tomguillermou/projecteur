/* eslint-disable no-unused-vars */

export default class GenericRoute {
    constructor(method, path, middlewares) {
        this.method = method;
        this.path = path;
        this.middlewares = middlewares;
    }

    /**
     * Securize inputs from request and return them
     * @param {*} request
     */
    getInputs(request) { /* Must be overwrite */ }

    /**
     * Process request and return the result
     * @param {*} request
     */
    async process(request) { /* Must be overwrite */ }
}
