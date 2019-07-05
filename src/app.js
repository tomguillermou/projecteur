const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');

require('module-alias/register');
require('dotenv').config();

const config = require('@root/config.json');

// Routers
const webRouter = require('@routes/web');

const app = express();

// Set variables for PugJS template engine
app.set('view engine', 'pug');
app.set('views', path.join(path.join(__dirname, '../'), 'views'));

// Load static files
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(morgan('dev'));
app.use(helmet()); // Use Helmet to protect headers
app.use(cors()); // Enable CORS for all origins
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Web router
app.use(webRouter);

// Scripts
// require('./scripts/seed'); // Seed

console.log('Connecting to MongoDB');
mongoose.connect(process.env.DATABASE_ADDRESS, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MongoDB');
        app.listen(config.appPort, () => {
            console.log(`App listening on port ${config.appPort}`);
        });
    }
});
