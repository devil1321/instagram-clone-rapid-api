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
    GraphActions["IG_HASHTAG_SEARCH"] = "IG_HASHTAG_SEARCH";
    GraphActions["IG_HASHTAG"] = "IG_HASHTAG";
    GraphActions["IG_MEDIA"] = "IG_MEDIA";
    GraphActions["IG_USER"] = "IG_USER";
})(GraphActions = exports.GraphActions || (exports.GraphActions = {}));
