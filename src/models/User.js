const mongoose = require('mongoose');

const name = 'User';

const attributes = {
    email: {
        type: String,
        required: true,
        validate: {
            validator: async (value) => {
                const user = await mongoose.model('User')
                    .findOne()
                    .where('email').equals(value)
                    .exec();

                return (user === null);
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
