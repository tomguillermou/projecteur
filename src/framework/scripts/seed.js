const mongoose = require('mongoose');

const seeds = require('../../database/seeds/seeds');

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true }, async () => {
    const operations = [];

    seeds.forEach((seed) => {
        console.log(`Seeding database with ${seed.name}`);
        operations.push(seed.operations());
    });

    try {
        await Promise.all(operations);
        console.log('finish');
    } catch (err) {
        console.log('err ', err);
    }
    
    mongoose.disconnect();
});
