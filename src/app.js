const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');

const frameworkRouter = require('./framework/core/router');

const app = express();

// Middlewares
app.use(helmet());
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse application/json

// Build router
frameworkRouter.init(`${__dirname}/api/routes`, '/v1');
const router = frameworkRouter.get();
app.use(router);

// Seeders
// const userSeeder = require('./api/db/seeders/userSeeder');

app.listen(config.APP_PORT, async () => {
    console.log(`App listening on port ${config.APP_PORT}`);

    // Connect to MongoDB
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(config.DATABASE_ADDRESS, { useNewUrlParser: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }

    // Seed DB
    try {
        // userSeeder.seed(200);
    } catch (error) {
        console.log(error);
    }
});
