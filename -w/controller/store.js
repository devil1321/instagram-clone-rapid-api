"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const reducers_1 = __importDefault(require("./reducers"));
const initData = {};
const middleware = [redux_thunk_1.default];
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
const store = (0, redux_1.createStore)(reducers_1.default, initData, composeEnchancers((0, redux_1.applyMiddleware)(...middleware)));
exports.default = store;
