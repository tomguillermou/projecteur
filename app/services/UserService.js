const CrudService = require('../../framework/services/CrudService');

const userModel = require('../models/User');

class UserService extends CrudService {
    constructor() {
        super(userModel);
    }
}

module.exports = UserService;
