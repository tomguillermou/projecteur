
const CrudController = require('../../framework/controllers/CrudController');

const UserService = require('../services/UserService');

const userService = new UserService();

class UserController extends CrudController {
    constructor() {
        super(userService);
    }

    async createOne(req, res) {
        const attributes = {
            email: req.body.email,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            gender: req.body.gender,
        };
        super.createOne(req, res, attributes);
    }
}

module.exports = UserController;
