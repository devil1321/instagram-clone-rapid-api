"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const keys_1 = require("../config/keys");
class IG_POSTS_ACTIONS {
    constructor() {
        this.userPosts = {};
        this.unlikePost = {};
        this.likePost = {};
    }
    getUserPosts(username, user_id, max_id) {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/user-posts',
            params: {
                session_key: global.session_key,
                username: username,
                user_id: user_id,
                max_id: max_id
            },
            headers: {
                headers: {
                    'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                    'x-rapidapi-key': keys_1.keys.rapidAPI.key
                }
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.userPosts = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
    getUnlikePost(media_id) {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/unlike-post',
            params: { media_id: media_id, session_key: global.session_key },
            headers: {
                'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                'x-rapidapi-key': keys_1.keys.rapidAPI.key
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.unlikePost = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
    getLikePost(media_id) {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/like-post',
            params: { session_key: global.session_key, media_id: media_id },
            headers: {
                'x-rapidapi-host': 'instagram-unofficial.p.rapidapi.com',
                'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.likePost = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
}
const IG_POSTS = new IG_POSTS_ACTIONS;
module.exports = IG_POSTS;
