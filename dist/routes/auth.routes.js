"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const IG_USERS = require('../modules/actions/user.actions');
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});
router.get('/sign-up', (req, res) => {
    res.render('signup', { title: "Sign Up" });
});
router.post('/authorize', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password } = req.body;
    IG_USERS.getLogin(name, password);
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            if (global.session_key !== undefined) {
                global.user = name;
                resolve(global.user);
            }
            else {
                reject(global.user);
            }
        }, 5000);
    }).then(user => {
        res.redirect('/instagram/home');
    })
        .catch(err => {
        console.log(err);
        res.redirect('/');
    });
}));
module.exports = router;
