"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const keys_1 = require("../config/keys");
class IG_STORIES_ACTIONS {
    constructor() {
        this.userStories = {};
    }
    getUserStories(username, user_id) {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/user-stories',
            params: {
                session_key: global.session_key,
                username: username,
                user_id: user_id
            },
            headers: {
                'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                'x-rapidapi-key': keys_1.keys.rapidAPI.key
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.userStories = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
}
const IG_STORIES = new IG_STORIES_ACTIONS;
module.exports = IG_STORIES;
