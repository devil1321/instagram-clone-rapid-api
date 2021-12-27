"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const keys_1 = require("../config/keys");
class IG_SEARCH_ACTIONS {
    constructor() {
        this.searchIGTV = {};
        this.searchTags = {};
        this.searchUsers = {};
        this.searchTop = {};
    }
    ;
    getIGTVSearch(q) {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/search-igtv',
            params: { query: q, session_key: global.session_key },
            headers: {
                'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                'x-rapidapi-key': keys_1.keys.rapidAPI.key
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.searchIGTV = response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }
    getTagsSearch(q) {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/search-tags',
            params: { query: q, session_key: global.session_key },
            headers: {
                'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                'x-rapidapi-key': keys_1.keys.rapidAPI.key
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.searchTags = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
    getUsersSearch(q) {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/search-users',
            params: { query: q, session_key: global.session_key },
            headers: {
                'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                'x-rapidapi-key': keys_1.keys.rapidAPI.key
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.searchUsers = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
    getTopSearch(q) {
        var options = {
            method: 'GET',
            url: 'https://instagram-unofficial.p.rapidapi.com/search',
            params: { query: q, session_key: global.session_key },
            headers: {
                'x-rapidapi-host': keys_1.keys.rapidAPI.host,
                'x-rapidapi-key': keys_1.keys.rapidAPI.key
            }
        };
        axios_1.default.request(options).then(function (response) {
            this.searchTop = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
}
const IG_SEARCH = new IG_SEARCH_ACTIONS;
module.exports = IG_SEARCH;
