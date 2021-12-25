"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphActions = exports.BasicActions = void 0;
var BasicActions;
(function (BasicActions) {
    BasicActions["GET_ME"] = "GET_ME";
    BasicActions["GET_MEDIA"] = "GET_MEDIA";
    BasicActions["GET_MEDIA_CHILDREN"] = "GET_MEDIA_CHILDREN";
    BasicActions["USER"] = "USER";
    BasicActions["USER_MEDIA"] = "USER_MEDIA";
})(BasicActions = exports.BasicActions || (exports.BasicActions = {}));
var GraphActions;
(function (GraphActions) {
    GraphActions["IG_CONTAINER"] = "IG_CONTAINER";
    GraphActions["IG_COMMENT"] = "IG_COMMENT";
    GraphActions["GET_IG_REPLIES"] = "GET_IG_REPLIES";
    GraphActions["POST_IG_REPLIES"] = "POST_IG_REPLIES";
    GraphActions["IG_HASHTAG_SEARCH"] = "IG_HASHTAG_SEARCH";
    GraphActions["IG_HASHTAG"] = "IG_HASHTAG";
    GraphActions["IG_MEDIA"] = "IG_MEDIA";
    GraphActions["POST_IG_MEDIA_COMMENTS"] = "POST_IG_MEDIA_COMMENTS";
    GraphActions["IG_MEDIA_CHILDREN"] = "IG_MEDIA_CHILDREN";
    GraphActions["IG_MEDIA_INSIGHTS"] = "IG_MEDIA_INSIGHTS";
    GraphActions["IG_USER"] = "IG_USER";
    GraphActions["IG_USER_STORIES"] = "IG_USER_STORIES";
})(GraphActions = exports.GraphActions || (exports.GraphActions = {}));
