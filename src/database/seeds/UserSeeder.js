const faker = require('faker');
const bcrypt = require('bcrypt');

const User = require('../../models/User');

faker.locale = 'fr';

module.exports = class UserSeeder {
    static run() {
        for (let index = 0; index < 20; index += 1) {
            const firstname = faker.name.firstName();
            const lastname = faker.name.lastName();

            User.create({
                email: faker.internet.email(firstname, lastname),
                username: (firstname + lastname).toLowerCase(),
                hash: bcrypt.hashSync('password', 10),
                gender: faker.random.arrayElement(['male', 'female']),
                age: faker.random.number({ min: 18, max: 60 }),
            }, (error) => {
                if (error) {
                    console.log(error);
                }
            });
        }
    }
};
