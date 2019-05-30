const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const config = require('./config');

// Routers
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');

const app = express();

// Middlewares
const verifyJwt = require('./middlewares/verifyJwt');

app.use(helmet()); // Use Helmet to protect headers
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse application/json
app.use(verifyJwt);

// Web router
app.use('/api', apiRouter);
app.use(webRouter);

// Framework scripts
// require('./framework/scripts/seed'); // Seed

app.listen(config.appPort, async () => {
    console.log(`App listening on port ${config.appPort}`);

    // Connect to MongoDB
    console.log('Connecting to MongoDB');
    try {
        await mongoose.connect(config.databaseAddress, { useNewUrlParser: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Cannot connect to MongoDB');
    }
});
