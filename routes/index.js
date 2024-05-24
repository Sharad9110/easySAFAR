const express = require('express');
const passport = require("../config/passport");

const router = express.Router();
const homeController = require('../controllers/home_controller');
const ownerController = require('../controllers/owner_controller');
console.log(router);

router.get('/',  passport.checkAuthentication, homeController.home);
router.use('/user', require('./user'));
router.use('/owner', require('./owner'));
router.use('/customer', require('./customer'));



module.exports = router;