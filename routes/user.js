const express = require('express');

const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/user_controller');
const userRouter = require('../controllers/user_router')

router.get('/sign-in', userRouter.signIn);
router.get('/sign-up', userRouter.signUP);
router.get('/customer', passport.checkAuthentication, userRouter.customer);
router.get('/owner', passport.checkAuthentication, userRouter.owner);
router.get('/sign-out', userRouter.destroySession);

// for sign-up
router.post('/create', userRouter.create);

// for sign-in
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/user/sign-in'},
), userRouter.createSession);

module.exports = router;