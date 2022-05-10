const express = require('express');


const {
  transfer
} = require('../controllers/transfers.controller');


const router = express.Router();


router.route(`/`)
    .post(transfer)

module.exports = { transfersRouter: router };
