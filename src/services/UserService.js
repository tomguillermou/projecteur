import CrudService from '../framework/services/CrudService';

import User from '../models/User';

module.exports = class UserService extends CrudService {
    constructor() {
        super(User);
    }
};
