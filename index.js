const express = require('express');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');

const config = require('./config');

const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// Build router

app.use('/users', require('./routes/users'));



// Build models
require('./models/User');


app.listen(config.APP_PORT, async function() {
	console.log(`App listening on port ${config.APP_PORT}`);

	// MongoDB connection
	try {
		console.log('Connecting to MongoDB...');
		await mongoose.connect(config.DATABASE_ADDRESS, {useNewUrlParser: true});
		console.log('Connected to MongoDB');
	} catch (err) {
		console.log(err);
	}
});

