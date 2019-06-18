const mongoose = require('mongoose');

const name = 'User';

const attributes = {
    email: {
        type: String,
        required: true,
        validate: {
            validator: async (value) => {
                const document = await mongoose.model('User')
                    .findOne({ email: value })
                    .exec();

                return (document === null);
            },
            message: 'This email is already used',
        },
    },
    hash: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
};

const options = {
    toObject: {
        virtuals: true,
    },
    toJSON: {
        virtuals: true,
    },
};

module.exports = mongoose.model(name, new mongoose.Schema(attributes, options));
