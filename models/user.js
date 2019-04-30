const mongoose = require('mongoose');

const name = 'User';

const attributes = {
	email: {
		type: String,
		required: true,
		index: { unique: true },
		validate: {
			validator: async function (value) {
				const document = await mongoose.model('User').findOne({email: value}).exec();
				return (document === null);
			},
			message: 'This email is already used.'
		}
	},
	hash: {
		type: String
	},
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		min: [13, 'You must be at least 13 to sign in.'],
		required: true
	}
};

const schema = new mongoose.Schema(
	attributes,
	{
		toObject: {
			virtuals: true
		},
		toJSON: {
			virtuals: true
		}
	}
);

module.exports.model = mongoose.model(name, schema);

module.exports.privateAttributes = ['email'];