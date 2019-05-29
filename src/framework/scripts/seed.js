const seeds = require('../../database/seeds/seeds');

seeds.forEach((seed) => {
    console.log(`Seeding database with ${seed.name}`);
    seed.run();
});
