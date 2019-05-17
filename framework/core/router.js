/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

const express = require('express');
const fs = require('fs');

const middlewares = require('../middlewares/index');

const router = express.Router();

// Middlewares
router.use(middlewares.logRequest);
router.use(middlewares.appendFrameworkObject);

module.exports.init = (routesFolderPath) => {
    fs.readdirSync(routesFolderPath).forEach((routeFilename) => {
        const route = require(`${routesFolderPath}/${routeFilename}`);
        router[route.method](route.path, route.middlewares, async (request, response) => {
            try {
                await route.secure(request);
                await route.authorize(request);
                await route.process(request);
                await route.notify(request);
                response.status(200).json(request.framework.data);
            } catch (error) {
                response.status(500).json(error);
            }
        });
        console.log(`New route: ${route.method.toUpperCase()} ${route.path}`);
    });
};

module.exports.get = () => router;
