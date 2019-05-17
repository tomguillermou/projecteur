const ReadOneRoute = require('../../framework/routes/crud/ReadOneRoute');

const userService = require('../services/userService');

const path = '/api/users/:id';
const middlewares = [];

module.exports = new ReadOneRoute(path, middlewares, userService);
