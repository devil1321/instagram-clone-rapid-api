"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
router.get('/edit-profile', (req, res) => {
    res.render('settings-views/edit-profile', { title: 'Edit Profile' });
});
router.get('/change-password', (req, res) => {
    res.render('settings-views/change-password', { title: 'Change Password' });
});
router.get('/manage-access', (req, res) => {
    res.render('settings-views/manage-access', { title: 'Apps & Websites' });
});
router.get('/email-and-sms', (req, res) => {
    res.render('settings-views/email-sms', { title: 'Email & SMS' });
});
router.get('/push-notifications', (req, res) => {
    res.render('settings-views/push-notifications', { title: 'Notifications' });
});
router.get('/manage-contacts', (req, res) => {
    res.render('settings-views/manage-contacts', { title: 'Manage Contacts' });
});
router.get('/privacy-and-security', (req, res) => {
    res.render('settings-views/privacy-and-security', { title: 'Privacy & Security' });
});
router.get('/login-activity', (req, res) => {
    res.render('settings-views/login-activity', { title: 'Login Activity' });
});
router.get('/emails-from-instagram', (req, res) => {
    res.render('settings-views/emails', { title: 'Emails' });
});
router.get('/help', (req, res) => {
    res.render('settings-views/help', { title: 'Help' });
});
router.get('/switch-to-proffesional-account', (req, res) => {
    res.render('settings-views/switch-to-proffessional-account', { title: 'Switch Accounts' });
});
module.exports = router;
