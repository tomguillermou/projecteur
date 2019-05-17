
const faker = require('faker');
const axios = require('axios');

const Seeder = require('../../../framework/db/Seeder');

faker.locale = 'fr';

class UserSeeder extends Seeder {
    // eslint-disable-next-line class-methods-use-this
    async seedOne() {
        const gender = faker.random.arrayElement(['male', 'female']);
        const firstname = faker.name.firstName(gender);
        const lastname = faker.name.lastName(gender);
        const email = faker.internet.email(firstname, lastname);

        const attributes = {
            email,
            password: 'password',
            firstname,
            lastname,
            age: faker.random.number({ min: 18, max: 60 }),
            gender,
        };

        try {
            await axios.post('http://localhost:5000/api/users', attributes);
            console.log('Success: User created with seeder.');
        } catch (error) {
            console.log('Error: Failed to create a user with seeder.');
        }
    }
}

module.exports = new UserSeeder();
