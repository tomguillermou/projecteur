const mongoose = require('mongoose');

const name = 'Project';

const attributes = {
    name: {
        type: String,
        required: true,
        validate: {
            validator: async (value) => {
                const project = await mongoose.model('Project')
                    .findOne()
                    .where('name').equals(value)
                    .exec();

                return (project === null);
            },
            message: 'A project already has this name',
        },
    },
    slogan: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    members_needed: {
        type: Number,
        required: true
    }
};

const options = {};

const schema = new mongoose.Schema(attributes, options);

module.exports = mongoose.model(name, schema);
