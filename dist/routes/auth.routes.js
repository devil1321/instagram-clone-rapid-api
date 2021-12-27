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
router.get('/authorize', (req, res) => {
    const { name, password } = req.body;
    console.log(name, password);
});
module.exports = router;
