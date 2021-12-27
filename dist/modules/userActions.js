"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const keys_1 = require("../config/keys");
class IG_USERS_ACTIONS {
    constructor() {
        this.user = {};
        this.followers = {};
        this.following = {};
        this.login = {};
        this.follow = {};
        this.unfollow = {};
    }
    getUser(username) {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/get-user',
            params: {
                session_key: global.session_key, username: username
            },
            headers: {
                'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                'x-rapidapi-key': keys_1.keys.rapidAPI.key
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.user = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
    getUserFollowers(username, user_id, max_id) {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/user-followers',
            params: {
                session_key: global.session_key,
                username: username,
                user_id: user_id,
                max_id: max_id
            },
            headers: {
                'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                'x-rapidapi-key': keys_1.keys.rapidAPI.key
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.followers = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
    getUserFollowing(username, user_id, max_id) {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/user-following',
            params: {
                session_key: global.session_key,
                username: username,
                user_id: user_id,
                max_id: max_id
            },
            headers: {
                'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                'x-rapidapi-key': keys_1.keys.rapidAPI.key
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.following = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
    getLogin(username, password) {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/login',
            params: { username: username, password: password },
            headers: {
                'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                'x-rapidapi-key': keys_1.keys.rapidAPI.key
            }
        };
        axios_1.default.request(options).then(function (response) {
            global.session_key = response.data.session_key;
        }).catch(function (error) {
            console.error(error);
        });
    }
    getFollow() {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/follow',
            params: { session_key: global.session_key },
            headers: {
                'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                'x-rapidapi-key': keys_1.keys.rapidAPI.key
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.follow = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
    getUnfollow() {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/unfollow',
            params: { session_key: global.session_key },
            headers: {
                'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                'x-rapidapi-key': keys_1.keys.rapidAPI.key
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.unfollow = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
}
const IG_USERS = new IG_USERS_ACTIONS;
module.exports = IG_USERS;
