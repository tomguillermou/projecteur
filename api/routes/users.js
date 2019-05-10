const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();
const userController = new UserController();

router.post('/', async (req, res) => {
    userController.createOne(req, res);
});

router.get('/', async (req, res) => {
    userController.readMany(req, res);
});

router.get('/:id', async (req, res) => {
    userController.readOne(req, res);
});

router.put('/', async (req, res) => {
    res.send('Put request');
});

router.delete('/', async (req, res) => {
    res.send('Delete request');
});

module.exports = router;
