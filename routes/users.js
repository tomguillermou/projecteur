const express = require('express');

const router = express.Router();

// Model
const User = require('../models/User');

const ownerAsking = false;

router.get('/', async function (req, res) {

	try {
		console.log('=============== QUERY ===============');
		// Retrieve projection from query and remove private attributes from it 
		let projection = req.query.fields;

		console.log('Projection:', projection);

		if (projection === undefined || projection === '') {

			if (!ownerAsking) {
				projection = '';
				User.privateAttributes.forEach(function(element) {
					projection += `-${element}`;
				});
			}

		} else {
			projection = projection.split(/[\s-,+"\'\"]/);

			console.log(projection);

			// Remove private attributes from projection
			if (!ownerAsking) {
				
				projection.forEach(function (element) {
					if (User.privateAttributes.includes(element)) {
						projection.splice(projection.indexOf(element), 1);
					}
				});
			
				projection = projection.join(' ');

				if (projection === '') {
					projection = '';

					User.privateAttributes.forEach(function(element) {
						projection += `-${element}`;
					});
				}
			}
		}

		console.log('Projection:', projection);
		
		// Retrieve limit from query
		let limit = req.query.limit;

		if (limit === undefined) {
			limit = 0;
		} else {
			limit = parseInt(req.query.limit);
		}

		console.log('Limit:', limit);
		
		const data = await User.model.find().select(projection).limit(limit).exec();

		res.status(200).json(data);

	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:id', async function (req, res) {

	try {
		const userId = req.params.id;

		const data = await User.model.findById(userId).exec();

		res.status(200).json(data);

	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', async function (req, res) {

	try {
		const attributes = {
			email: req.body.email,
			password: req.body.password,
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			age: req.body.age
		};
	
		const data = await User.model.create(attributes);

		res.status(200).json({data: data});

	} catch (err) {
		res.status(500).json({ error: err });
	}
});

router.put('/', function (req, res) {

});

router.delete('/', function (req, res) {

});

module.exports = router;