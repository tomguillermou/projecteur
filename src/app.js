const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');

// Routers
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');

const app = express();

// Middlewares
app.use(helmet());
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse application/json

// Web router
app.use(apiRouter);
app.use(webRouter);

// Framework scripts
require('./framework/scripts/seed'); // Seed

app.listen(config.APP_PORT, async () => {
    console.log(`App listening on port ${config.APP_PORT}`);

    // Connect to MongoDB
    console.log('Connecting to MongoDB');
    try {
        await mongoose.connect(config.DATABASE_ADDRESS, { useNewUrlParser: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Cannot connect to MongoDB');
    }
});
