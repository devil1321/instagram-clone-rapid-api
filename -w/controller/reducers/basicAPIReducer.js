"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const initData = {
    me: null,
    media: null,
    mediaChildren: null,
    user: null,
    userMedia: null,
};
exports.default = (state = initData, action) => {
    switch (action.type) {
        case types_1.BasicActions.GET_ME:
            return Object.assign(Object.assign({}, state), { me: action.me });
        case types_1.BasicActions.GET_MEDIA:
            return Object.assign(Object.assign({}, state), { media: action.media });
        case types_1.BasicActions.GET_MEDIA_CHILDREN:
            return Object.assign(Object.assign({}, state), { mediaChildren: action.mediaChildren });
        case types_1.BasicActions.USER:
            return Object.assign(Object.assign({}, state), { user: action.user });
        case types_1.BasicActions.USER_MEDIA:
            return Object.assign(Object.assign({}, state), { userMedia: action.userMedia });
        default:
            return Object.assign({}, state);
    }
};
