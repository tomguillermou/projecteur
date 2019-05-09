const express = require('express');
const mongoose = require('mongoose');

const config = require('./config');

const app = express();

// Parse application/json (require Express 4.16+)
app.use(express.json());

// Build router
app.use('/users', require('./app/routes/users'));

// Factories
const userFactory = require('./app/factories/UserFactory');

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
        userFactory(20);
    } catch (error) {
        console.log(error);
    }
});
