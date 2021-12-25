"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserMedia = exports.getUser = exports.getMediaChildren = exports.getMedia = exports.getMe = void 0;
const types_1 = require("../types");
const axios_1 = __importDefault(require("axios"));
const keys_1 = require("../../config/keys");
const getMe = () => (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://graph.instagram.com/v12.0/me',
        params: {
            fields: '',
            access_token: keys_1.keys.session.accessToken
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.BasicActions.GET_ME,
            me: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.getMe = getMe;
const getMedia = () => (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://graph.instagram.com/{media-id}',
        params: {
            fields: 'caption,id,media_type,media_url,premalink,thumbnail_url,timestamp,username,children',
            access_token: keys_1.keys.session.accessToken
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.BasicActions.GET_MEDIA,
            media: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.getMedia = getMedia;
const getMediaChildren = () => (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://graph.instagram.com/{media-id}/children',
        params: {
            access_token: keys_1.keys.session.accessToken
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.BasicActions.GET_MEDIA_CHILDREN,
            mediaChildren: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.getMediaChildren = getMediaChildren;
const getUser = (userId) => (dispatch) => {
    const options = {
        method: 'GET',
        url: `https://graph.instagram.com/v12.0/${userId}`,
        params: {
            fields: 'account_type,id,media_count,username,media',
            access_token: keys_1.keys.session.accessToken
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.BasicActions.USER,
            user: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.getUser = getUser;
const getUserMedia = (userId) => (dispatch) => {
    const options = {
        method: 'GET',
        url: `https://graph.instagram.com/v12.0/${userId}/media`,
        params: {
            access_token: keys_1.keys.session.accessToken
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.BasicActions.GET_MEDIA_CHILDREN,
            mediaChildren: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.getUserMedia = getUserMedia;
