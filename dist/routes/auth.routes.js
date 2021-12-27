"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IG_USERS = require('../modules/userActions');
const router = require('express').Router();
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});
router.get('/sign-up', (req, res) => {
    res.render('signup', { title: "Sign Up" });
});
router.post('/authorize', (req, res) => {
    const { name, password } = req.body;
    IG_USERS.getLogin(name, password);
    setTimeout(() => {
        console.log(global.session_key);
    }, 1000);
});
module.exports = router;
