"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const remote_redux_devtools_1 = require("remote-redux-devtools");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const reducers_1 = __importDefault(require("./reducers"));
const initData = {};
const middleware = [redux_thunk_1.default];
const composeEnhancers = (0, remote_redux_devtools_1.composeWithDevTools)({ suppressConnectErrors: false, realtime: true, host: 'localhost', port: 9000 });
const store = (0, redux_1.createStore)(reducers_1.default, initData, composeEnhancers((0, redux_1.applyMiddleware)(...middleware)));
exports.default = store;
