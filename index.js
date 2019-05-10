const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse application/json
app.use(bodyParser.json());

// Build router
app.use('/api/users', require('./api/routes/users'));

// Factories
const usersFactory = require('./api/factories/users');

app.listen(config.APP_PORT, async () => {
    console.log(`App listening on port ${config.APP_PORT}`);

    // MongoDB connection
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(config.DATABASE_ADDRESS, { useNewUrlParser: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }

    try {
        usersFactory.factorize(5);
    } catch (error) {
        console.log(error);
    }
});
