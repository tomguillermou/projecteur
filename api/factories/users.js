
const faker = require('faker');
const axios = require('axios');

faker.locale = 'fr';

async function createOne() {
    const attributes = {
        email: faker.internet.email(),
        password: 'password',
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        age: faker.random.number({ min: 18, max: 60 }),
        gender: faker.random.arrayElement(['male', 'female']),
    };

    try {
        await axios.post('http://localhost:5000/api/users', attributes);
    } catch (error) {
        console.log(error);
    }
}

function factorize(count) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < count; i++) {
        createOne();
    }
}

module.exports = {
    factorize,
};
