const mongoose = require('mongoose');

const name = 'User';

const attributes = {
    email: {
        type: String,
        required: true,
        validate: {
            validator: async (value) => {
                const document = await mongoose.model('User').findOne({ email: value }).exec();
                return (document === null);
            },
            message: 'This email is already used',
        },
    },
    username: {
        type: String,
        required: true,
        validate: {
            validator: async (value) => {
                const document = await mongoose.model('User').findOne({ username: value }).exec();
                return (document === null);
            },
            message: 'This username already exists',
        },
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: [18, 'You must be at least 18 to sign in'],
        required: true,
    },
};

const options = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
    toObject: {
        virtuals: true,
    },
    toJSON: {
        virtuals: true,
    },
};

module.exports = mongoose.model(name, new mongoose.Schema(attributes, options));
