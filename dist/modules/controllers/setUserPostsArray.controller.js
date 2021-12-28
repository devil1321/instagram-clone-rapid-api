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
const IG_USERS = require('../actions/user.actions');
const IG_POSTS = require('../actions/posts.actions');
module.exports = function (req, res, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        (_b = (_a = IG_USERS.following) === null || _a === void 0 ? void 0 : _a.users) === null || _b === void 0 ? void 0 : _b.map((user) => {
            const { username } = user;
            setTimeout(() => {
                IG_POSTS.getUser(username);
            }, 1000);
            setTimeout(() => {
                IG_POSTS.allPosts.push(IG_POSTS.userPosts);
            }, 1000);
            console.log(IG_POSTS);
        });
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(IG_POSTS);
            }, 3000);
        }).then(data => {
            setTimeout(() => {
                next();
            }, 1000);
        }).catch(err => console.log(err));
    });
};
