import CrudService from '../framework/services/CrudService';

import User from '../models/User';

export default class UserService extends CrudService {
    constructor() {
        super(User);
    }
}
