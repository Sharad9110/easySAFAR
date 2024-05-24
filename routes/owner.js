const express = require('express');

const router = express.Router();
const passport = require('passport');

const ownerController = require('../controllers/owner_controller');

router.post('/create',ownerController.create);

module.exports = router;