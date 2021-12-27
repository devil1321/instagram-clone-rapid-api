"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const keys_1 = require("../config/keys");
class IG_TAGS_ACTIONS {
    constructor() {
        this.tagPosts = {};
        this.tag = {};
    }
    getTagPosts(tag, max_id) {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/tag-posts',
            params: { session_key: global.session_key, tag: tag, max_id: max_id },
            headers: {
                'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                'x-rapidapi-key': keys_1.keys.rapidAPI.key
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.tagPosts = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
    getTag(tag) {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/get-tag',
            params: { tag: tag },
            headers: {
                'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                'x-rapidapi-key': keys_1.keys.rapidAPI.key
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.tag = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
}
const IG_TAGS = new IG_TAGS_ACTIONS;
module.exports = IG_TAGS;
