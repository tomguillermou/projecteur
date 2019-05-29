module.exports = class CrudService {
    constructor(model) {
        this.model = model;
    }

    async createOne(attributes) {
        try {
            const result = await this.model.create(attributes);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async readOne(conditions) {
        try {
            const result = await this.model.findOne(conditions).exec();
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
            result.count = await this.model.count(conditions).exec();
        } catch (error) {
            console.log(error);
            throw error;
        }

        // Fetch results
        try {
            result.results = await this.model.find(conditions).exec();
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
};
