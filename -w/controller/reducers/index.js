"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const basicAPIReducer_1 = __importDefault(require("./basicAPIReducer"));
const graphAPIReducer_1 = __importDefault(require("./graphAPIReducer"));
const reducers = (0, redux_1.combineReducers)({
    basicAPI: basicAPIReducer_1.default,
    graphAPI: graphAPIReducer_1.default
});
exports.default = reducers;
