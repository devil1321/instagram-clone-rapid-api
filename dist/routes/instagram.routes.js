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
router.get('/inbox', /*setUserDataContoller,setUserPostsArrayController,*/ (req, res) => {
    // console.log(IG_USERS)
    res.render('inbox', { title: 'Inbox' });
});
router.get('/create-post', /*setUserDataContoller,setUserPostsArrayController,*/ (req, res) => {
    // console.log(IG_USERS)
    res.render('home', { title: 'Create Post' });
});
router.get('/explore', /*setUserDataContoller,setUserPostsArrayController,*/ (req, res) => {
    // console.log(IG_USERS)
    res.render('explore', { title: 'Explore' });
});
module.exports = router;
