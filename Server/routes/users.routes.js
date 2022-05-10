const express = require('express');


const {
  signup,  login
} = require('../controllers/users.controller');
const {getTransfers} = require('../controllers/transfers.controller');

const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.get('/:id/history', getTransfers)
module.exports = { usersRouter: router };
