/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

const express = require('express');
const fs = require('fs');

const middlewares = require('../middlewares/index');

const router = express.Router();

/**
 * Bind the given route to the router
 * @param {*} route
 */
function bindRoute(route) {
    router[route.method](route.path, route.middlewares, async (request, response) => {
        try {
            const result = await route.process(request);
            response.status(200).json(result);
        } catch (error) {
            response.status(500).json({
                status: 500,
                message: error.message,
            });
        }
    });
}

/**
 * Bind all existing routes inside the given folder path
 * @param {*} routesFolderPath
 */
function bindRoutes(routesFolderPath) {
    fs.readdirSync(routesFolderPath).forEach((filename) => {
        // Check if its a directory
        if (!filename.includes('.js')) {
            fs.readdirSync(`${routesFolderPath}/${filename}`).forEach((routeFilename) => {
                const route = require(`${routesFolderPath}/${filename}/${routeFilename}`);
                bindRoute(route);
                console.log(`New route: ${route.method.toUpperCase()} ${route.path}`);
            });
        } else {
            const route = require(`${routesFolderPath}/${filename}`);
            bindRoute(route);
            console.log(`New route: ${route.method.toUpperCase()} ${route.path}`);
        }
    });
}

module.exports.init = (routesFolderPath) => {
    // Middlewares
    router.use(middlewares.requestLogger);

    // Simulate JWT token decryption
    router.use((req, res, next) => {
        req.auth_user_id = '5ce2a5f9f5dffe22bc270490';
        next();
    });

    // Bind all routes
    bindRoutes(routesFolderPath);
};

module.exports.get = () => router;
