const mongoose = require('mongoose');

class CrudService {
    constructor(model) {
        this.model = model;
    }

    async createOne(attributes) {
        try {
            const result = await mongoose.model(this.model.modelName)
                .create(attributes);

            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async readOne(id) {
        try {
            const result = await mongoose.model(this.model.modelName)
                .findById(id)
                .exec();

            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async readMany(conditions) {
        try {
            const count = await mongoose.model(this.model.modelName)
                .count(conditions)
                .exec();

            const results = await mongoose.model(this.model.modelName)
                .find(conditions)
                .exec();

            return { count, results };
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async updateOne() {
        // empty
    }

    static async deleteOne() {
        // empty
    }
}

module.exports = CrudService;
