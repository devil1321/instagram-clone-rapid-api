"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = require("./config/keys");
var fs = require('fs');
var https = require('https');
var privateKey = fs.readFileSync(__dirname + '/ssl/host.key');
var certificate = fs.readFileSync(__dirname + '/ssl/host.cert');
var credentials = { key: privateKey, cert: certificate };
const express = require('express');
const path = require('path');
const app = express();
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const authRoutes = require('./routes/auth.routes');
const instagramRoutes = require('./routes/instagram.routes');
require('dotenv').confing;
const PORT = 4000 || process.env.PORT;
const PORTHTTPS = 7000 || process.env.HTTPS;
app.use('/public', express.static('public'));
app.set('views', path.join(__dirname, "../views"));
app.set('view engine', 'ejs');
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys_1.keys.session.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
app.get('/', (req, res) => {
    res.redirect('/instagram/auth/login');
});
app.use('/instagram/auth', authRoutes);
app.use('/instagram', instagramRoutes);
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(PORTHTTPS, (req, res) => {
    console.log('https server started at port ' + PORTHTTPS);
});
