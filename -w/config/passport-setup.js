"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = require("./keys");
const passport = require('passport');
const InstagramStrategy = require('passport-instagram').Strategy;
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((user, done) => {
    done(null, user.id);
});
passport.use(new InstagramStrategy({
    clientID: keys_1.keys.passport.clientID,
    clientSecret: keys_1.keys.passport.clientSecret,
    callbackURL: '/instagram/auth/authorize/callback',
}, function (accessToken, refreshToken, profile, done) {
    global.accessToken = accessToken;
    console.log(profile);
    done(null, profile);
}));
