"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const passport = require('passport');
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});
router.get('/sign-up', (req, res) => {
    res.render('signup', { title: "Sign Up" });
});
router.get('/authorize', passport.authenticate('instagram', {
    scope: ['user_profile', 'user_media'],
    failWithError: true
}));
router.get('/authorize/callback', passport.authenticate('instagram', { failWithError: true, failureRedirect: '/instagram/auth/login' }), (req, res) => {
    res.redirect('/home');
});
module.exports = router;
