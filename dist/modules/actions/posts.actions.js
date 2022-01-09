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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const keys_1 = require("../../config/keys");
class IG_POSTS_ACTIONS {
    constructor() {
        this.allPosts = [];
        this.userPosts = {};
        this.unlikePost = {};
        this.likePost = {};
    }
    getUserPosts(username, user_id, max_id) {
        return __awaiter(this, void 0, void 0, function* () {
            var options = {
                method: 'GET',
                url: 'https://instagram-unofficial.p.rapidapi.com/user-posts',
                params: {
                    session_key: keys_1.keys.session.sessionKey,
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
            const data = yield axios_1.default.request(options).then(function (response) {
                return response.data;
            }).catch(function (error) {
                console.error(error);
            });
            this.userPosts = data;
        });
    }
    getUnlikePost(media_id) {
        return __awaiter(this, void 0, void 0, function* () {
            var options = {
                method: 'GET',
                url: 'https://instagram-unofficial.p.rapidapi.com/unlike-post',
                params: { media_id: media_id, session_key: keys_1.keys.session.sessionKey },
                headers: {
                    'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                    'x-rapidapi-key': keys_1.keys.rapidAPI.key
                }
            };
            const data = yield axios_1.default.request(options).then(function (response) {
                return response.data;
            }).catch(function (error) {
                console.error(error);
            });
            this.unlikePost = data;
        });
    }
    getLikePost(media_id) {
        return __awaiter(this, void 0, void 0, function* () {
            var options = {
                method: 'GET',
                url: 'https://instagram-unofficial.p.rapidapi.com/like-post',
                params: { session_key: keys_1.keys.session.sessionKey, media_id: media_id },
                headers: {
                    'x-rapidapi-host': 'instagram-unofficial.p.rapidapi.com',
                    'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
                }
            };
            const data = yield axios_1.default.request(options).then(function (response) {
                return response.data;
            }).catch(function (error) {
                console.error(error);
            });
            this.likePost = data;
        });
    }
}
const IG_POSTS = new IG_POSTS_ACTIONS;
module.exports = IG_POSTS;
