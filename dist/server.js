"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = require("./config/keys");
var fs = require('fs');
var https = require('https');
var privateKey = fs.readFileSync(__dirname + '/ssl/host.key');
// var certificate = fs.readFileSync(__dirname + '/ssl/host.cert');
// var credentials = {key: privateKey, cert: certificate};
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cookieSession = require('cookie-session');
const isAuthenticated = require('./modules/controllers/isAuthenticated.controller');
const authRoutes = require('./routes/auth.routes');
const instagramRoutes = require('./routes/instagram.routes');
const settingsRoutes = require('./routes/settings.routes');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const PORTHTTPS = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys_1.keys.session.cookieKey]
}));
app.use('/public', express.static('public'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/modules', express.static(__dirname + '/modules'));
app.set('views', path.join(__dirname, "../views"));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.redirect('/instagram/auth/login');
});
app.use('/instagram/auth', authRoutes);
app.use('/instagram', /* isAuthenticated,*/ instagramRoutes);
app.use('/settings', settingsRoutes);
app.listen(PORTHTTPS, (req, res) => {
    console.log('http server started at port ' + PORTHTTPS);
});
