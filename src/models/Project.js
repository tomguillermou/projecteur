const mongoose = require('mongoose');

const name = 'Project';

const attributes = {
    name: {
        type: String,
        required: true
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

const options = {
    toObject: {
        virtuals: true,
    },
    toJSON: {
        virtuals: true
    }
};

module.exports = mongoose.model(name, new mongoose.Schema(attributes, options));
