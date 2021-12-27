"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
router.get('/home', (req, res) => {
    res.render('home', { title: 'Home', isNavbarOpen: false });
});
module.exports = router;
