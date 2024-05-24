const express = require('express');

const router = express.Router();
const passport = require('passport');

const customerController = require('../controllers/cutomer_controller');

router.post('/find',customerController.find);

module.exports = router;