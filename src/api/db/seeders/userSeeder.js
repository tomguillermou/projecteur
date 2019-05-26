import Seeder from '../../../framework/db/Seeder';

// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');

faker.locale = 'fr';

class UserSeeder extends Seeder {
    getRoute() {
        return 'localhost:5000/users';
    }

    getAttributes() {
        const firstname = faker.name.firstName();
        const lastname = faker.name.lastName();

        return {
            email: faker.internet.email(firstname, lastname),
            username: (firstname + lastname).toLowerCase(),
            gender: faker.random.arrayElement(['male', 'female']),
            age: faker.random.number({ min: 18, max: 60 }),
        };
    }
}

module.exports = new UserSeeder();
