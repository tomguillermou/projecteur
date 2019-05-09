
const helpers = require('../helpers/index');

class CrudController {
    constructor(service) {
        this.service = service;
    }

    async createOne(req, res, attributes) {
        console.log('CrudController => createOne');
        try {
            const data = await this.service.createOne(attributes);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async readOne(req, res) {
        console.log('CrudController => readOne');
        try {
            const userId = req.params.id;
            const data = await this.service.readOne(userId);
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

    async readMany(req, res) {
        console.log('CrudController => readMany');
        try {
            const limit = helpers.getLimitFromQuery(req.query);
            const data = await this.service.readMany(limit);
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}

module.exports = CrudController;
