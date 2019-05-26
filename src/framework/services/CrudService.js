const mongoose = require('mongoose');

export default class CrudService {
    constructor(model) {
        this.model = model;
    }

    async createOne(attributes) {
        try {
            const result = await mongoose.model(this.model.modelName).create(attributes);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async readOne(conditions) {
        try {
            const result = await mongoose.model(this.model.modelName).findOne(conditions).exec();
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async readMany(conditions) {
        const result = {};

        // Fetch count
        try {
            result.count = await mongoose.model(this.model.modelName).count(conditions).exec();
        } catch (error) {
            console.log(error);
            throw error;
        }

        // Fetch results
        try {
            result.results = await mongoose.model(this.model.modelName).find(conditions).exec();
        } catch (error) {
            console.log(error);
            throw error;
        }

        return result;
    }

    async updateOne() {
        // empty
    }

    async deleteOne() {
        // empty
    }
}
