const mongoose = require('mongoose');

class CrudService {
    constructor(model) {
        this.model = model;
    }

    async createOne(attributes) {
        console.log('CrudService => createOne');
        try {
            const data = await mongoose.model(this.model.modelName).create(attributes);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async readOne(id) {
        console.log('CrudService => readOne');
        try {
            const data = await mongoose.model(this.model.modelName).findById(id).exec();
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async readMany(limit) {
        console.log('CrudService => readMany');
        try {
            const data = await mongoose.model(this.model.modelName).find().limit(limit).exec();
            return data;
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
