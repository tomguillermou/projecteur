import CrudService from '../../framework/services/CrudService';

const userModel = require('../models/User');

// class UserService extends CrudService {}

module.exports = new CrudService(userModel);
