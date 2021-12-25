"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IG_USER_STORIES = exports.IG_USER = exports.IG_MEDIA_INSIGHTS = exports.IG_MEDIA_CHILDREN = exports.POST_IG_MEDIA_COMMENTS = exports.IG_MEDIA = exports.IG_HASHTAG = exports.IG_HASHTAG_SEARCH = exports.POST_IG_REPLIES = exports.GET_IG_REPLIES = exports.IG_COMMENT = exports.IG_CONTAINER = void 0;
const types_1 = require("../types");
const axios_1 = __importDefault(require("axios"));
const keys_1 = require("../../config/keys");
const IG_CONTAINER = (igContainerId) => (dispatch) => {
    const options = {
        method: 'GET',
        url: `https://graph.instagram.com/${igContainerId}`,
        params: {
            fields: 'id,status,status_code',
            access_token: keys_1.keys.session.accessToken
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.GraphActions.IG_CONTAINER,
            IG_CONTAINER: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.IG_CONTAINER = IG_CONTAINER;
const IG_COMMENT = (commentId) => (dispatch) => {
    const options = {
        method: 'GET',
        url: `https://graph.instagram.com/v12.0/${commentId}`,
        params: {
            fields: 'from,hidden,id,like_count,media,parent_id,replies,text,timestamp,user,username',
            access_token: keys_1.keys.session.accessToken
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.GraphActions.IG_COMMENT,
            IG_COMMENT: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.IG_COMMENT = IG_COMMENT;
const GET_IG_REPLIES = (commentId) => (dispatch) => {
    const options = {
        method: 'GET',
        url: `https://graph.facebook.com/${commentId}/replies`,
        params: {
            fields: 'from,hidden,id,like_count,media,parent_id,replies,text,timestamp,user,username',
            access_token: keys_1.keys.session.accessToken
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.GraphActions.GET_IG_REPLIES,
            IG_REPLIES: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.GET_IG_REPLIES = GET_IG_REPLIES;
const POST_IG_REPLIES = (commentId, message) => (dispatch) => {
    const options = {
        method: 'POST',
        url: `https://graph.facebook.com/${commentId}/replies`,
        params: {
            message: message
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.GraphActions.POST_IG_REPLIES,
        });
    })
        .catch((err) => console.log(err));
};
exports.POST_IG_REPLIES = POST_IG_REPLIES;
const IG_HASHTAG_SEARCH = (userId, q) => (dispatch) => {
    const options = {
        method: 'GET',
        url: `https://graph.facebook.com/v12.0/ig_hashtag_search`,
        params: {
            user_id: userId,
            q: q,
            access_token: keys_1.keys.session.accessToken
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.GraphActions.IG_HASHTAG_SEARCH,
            IG_HASHTAG_SEARCH: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.IG_HASHTAG_SEARCH = IG_HASHTAG_SEARCH;
const IG_HASHTAG = (igHashtagId) => (dispatch) => {
    const options = {
        method: 'GET',
        url: `https://graph.instagram.com/${igHashtagId}`,
        params: {
            fields: 'id,name,recent_media,top_media',
            access_token: keys_1.keys.session.accessToken
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.GraphActions.POST_IG_REPLIES,
            IG_HASHTAG: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.IG_HASHTAG = IG_HASHTAG;
const IG_MEDIA = (igMediaId) => (dispatch) => {
    const options = {
        method: 'GET',
        url: `https://graph.instagram.com/v12.0/${igMediaId}`,
        params: {
            fields: 'caption,comments_count,id,ig_id,is_comment_enabled,like_count,media_product_type,media_type,media_url,owner,permalink,shortcode,thumbnail_url,timestamp,username,video_title,children,comments,insights',
            access_token: keys_1.keys.session.accessToken
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.GraphActions.IG_MEDIA,
            IG_MEDIA: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.IG_MEDIA = IG_MEDIA;
const POST_IG_MEDIA_COMMENTS = (igMediaId, message) => (dispatch) => {
    const options = {
        method: 'POST',
        url: `https://graph.facebook.com/${igMediaId}/comments`,
        params: {
            message: message,
            access_token: keys_1.keys.session.accessToken
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.GraphActions.POST_IG_MEDIA_COMMENTS,
        });
    })
        .catch((err) => console.log(err));
};
exports.POST_IG_MEDIA_COMMENTS = POST_IG_MEDIA_COMMENTS;
const IG_MEDIA_CHILDREN = (igMediaId) => (dispatch) => {
    const options = {
        method: 'GET',
        url: `https://graph.facebook.com/${igMediaId}/children`
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.GraphActions.IG_MEDIA_CHILDREN,
            IG_MEDIA_CHILDREN: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.IG_MEDIA_CHILDREN = IG_MEDIA_CHILDREN;
const IG_MEDIA_INSIGHTS = (igMediaId) => (dispatch) => {
    const options = {
        method: 'GET',
        url: `https://graph.facebook.com/v12.0/${igMediaId}/insightss`,
        params: {
            metric: 'engagement,impressions,reach,saved,video_views,carousel_album_engagement,carousel_album_impressions,carousel_album_reach,carousel_album_saved,carousel_album_video_views,exits,impressions,impressions,replies,taps_forward,taps_back',
            access_token: keys_1.keys.session.accessToken
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.GraphActions.IG_MEDIA_INSIGHTS,
            IG_MEDIA_INSIGHTS: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.IG_MEDIA_INSIGHTS = IG_MEDIA_INSIGHTS;
const IG_USER = (igUserId) => (dispatch) => {
    const options = {
        method: 'GET',
        url: `https://graph.facebook.com/v3.2/${igUserId}`,
        params: {
            fields: 'biography,id,ig_id,followers_count,follows_count,media_count,name,profile_picture_url,username,website',
            access_token: keys_1.keys.session.accessToken
        }
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.GraphActions.IG_USER,
            IG_USER: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.IG_USER = IG_USER;
const IG_USER_STORIES = (igUserId) => (dispatch) => {
    const options = {
        method: 'GET',
        url: `https://graph.facebook.com/${igUserId}/stories`
    };
    axios_1.default.request(options)
        .then((res) => {
        dispatch({
            type: types_1.GraphActions.IG_USER_STORIES,
            IG_USER_STORIES: res.data
        });
    })
        .catch((err) => console.log(err));
};
exports.IG_USER_STORIES = IG_USER_STORIES;
