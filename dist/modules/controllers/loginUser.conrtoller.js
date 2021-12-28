"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IG_USERS = require('../actions/user.actions');
module.exports = function (req, res, next) {
    const { name, password } = req.body;
    IG_USERS.getLogin(name, password);
    setTimeout(() => {
        if (global.session_key) {
            global.user = name;
        }
    }, 5000);
    next();
};
