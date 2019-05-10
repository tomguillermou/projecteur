const mongoose = require('mongoose');

const name = 'User';

const attributes = {
    email: {
        type: String,
        required: true,
        index: { unique: true },
        validate: {
            validator: async (value) => {
                const document = await mongoose.model('User').findOne({ email: value }).exec();
                return (document === null);
            },
            message: 'This email is already used.',
        },
    },
    hash: {
        type: String,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: [13, 'You must be at least 13 to sign in.'],
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
};

const schemaProperties = {
    toObject: {
        virtuals: true,
    },
    toJSON: {
        virtuals: true,
    },
};

const schema = new mongoose.Schema(
    attributes,
    schemaProperties,
);

module.exports = mongoose.model(name, schema);
