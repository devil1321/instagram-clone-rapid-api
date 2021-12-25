"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const initData = {
    IG_CONTAINER: null,
    IG_COMMENT: null,
    IG_HASHTAG_SEARCH: null,
    IG_HASHTAG: null,
    IG_MEDIA: null,
    IG_USER: null,
};
exports.default = (state = initData, action) => {
    switch (action.type) {
        case types_1.GraphActions.IG_CONTAINER:
            return Object.assign(Object.assign({}, state), { IG_CONTAINER: action.IG_CONTAINER });
        case types_1.GraphActions.IG_COMMENT:
            return Object.assign(Object.assign({}, state), { IG_CONTAINER: action.IG_CONTAINER });
        case types_1.GraphActions.GET_IG_REPLIES:
            return Object.assign(Object.assign({}, state), { IG_REPLIES: action.IG_REPLIES });
        case types_1.GraphActions.POST_IG_REPLIES:
            return Object.assign({}, state);
        case types_1.GraphActions.IG_HASHTAG_SEARCH:
            return Object.assign(Object.assign({}, state), { IG_HASHTAG_SEARCH: action.IG_HASHTAG_SEARCH });
        case types_1.GraphActions.IG_HASHTAG:
            return Object.assign(Object.assign({}, state), { IG_HASHTAG: action.IG_HASHTAG });
        case types_1.GraphActions.IG_MEDIA:
            return Object.assign(Object.assign({}, state), { IG_MEDIA: action.IG_MEDIA });
        case types_1.GraphActions.POST_IG_MEDIA_COMMENTS:
            return Object.assign({}, state);
        case types_1.GraphActions.IG_MEDIA_CHILDREN:
            return Object.assign(Object.assign({}, state), { IG_MEDIA_CHILDREN: action.IG_MEDIA_CHILDREN });
        case types_1.GraphActions.IG_MEDIA_INSIGHTS:
            return Object.assign(Object.assign({}, state), { IG_MEDIA_INSIGHTS: action.IG_MEDIA_INSIGHTS });
        case types_1.GraphActions.IG_USER:
            return Object.assign(Object.assign({}, state), { IG_USER: action.IG_USER });
        case types_1.GraphActions.IG_USER_STORIES:
            return Object.assign(Object.assign({}, state), { IG_USER_STORIES: action.IG_USER_STORIES });
        default:
            return Object.assign({}, state);
    }
};
