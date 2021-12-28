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
class IG_TAGS_ACTIONS {
    constructor() {
        this.tagPosts = {};
        this.tag = {};
    }
    getTagPosts(tag, max_id) {
        return __awaiter(this, void 0, void 0, function* () {
            var options = {
                method: 'GET',
                url: 'https://instagram-unofficial.p.rapidapi.com/tag-posts',
                params: { session_key: global.session_key, tag: tag, max_id: max_id },
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
            this.tagPosts = data;
        });
    }
    getTag(tag) {
        return __awaiter(this, void 0, void 0, function* () {
            var options = {
                method: 'GET',
                url: 'https://instagram-unofficial.p.rapidapi.com/get-tag',
                params: { tag: tag },
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
            this.tag = data;
        });
    }
}
const IG_TAGS = new IG_TAGS_ACTIONS;
module.exports = IG_TAGS;
