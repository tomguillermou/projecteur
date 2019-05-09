
const faker = require('faker');
const axios = require('axios');

async function createOne() {
    const attributes = {
        email: faker.internet.email(),
        password: 'password',
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        age: faker.random.number({ min: 18, max: 60 }),
    };

    try {
        const res = await axios.post('http://localhost:5000/users', attributes);
        console.log('User created:', res.data);
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

module.exports = factorize;
