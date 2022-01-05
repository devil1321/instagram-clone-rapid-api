"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IG_USERS = require('../modules/actions/user.actions');
const router = require('express').Router();
const setUserDataContoller = require('../modules/controllers/setUserData.controller');
const setUserPostsArrayController = require('../modules/controllers/setUserPostsArray.controller');
router.get('/home', /*setUserDataContoller,setUserPostsArrayController,*/ (req, res) => {
    // console.log(IG_USERS)
    res.render('home', { title: 'Home' });
});
router.get('/suggestions', (req, res) => {
    res.render('suggestions', { title: 'Suggestions' });
});
router.get('/inbox', /*setUserDataContoller,setUserPostsArrayController,*/ (req, res) => {
    // console.log(IG_USERS)
    res.render('inbox', { title: 'Inbox' });
});
router.get('/explore', /*setUserDataContoller,setUserPostsArrayController,*/ (req, res) => {
    // console.log(IG_USERS)
    res.render('explore', { title: 'Explore' });
});
router.get('/profile', (req, res) => {
    res.render('profile', { title: 'Profile' });
});
router.get('/saved', (req, res) => {
    res.render('profile', { title: 'Saved' });
});
module.exports = router;
