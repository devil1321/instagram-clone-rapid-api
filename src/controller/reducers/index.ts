import { readSync } from "fs";
import { combineReducers } from "redux";
import basicAPIReducer from "./basicAPIReducer";
import graphAPIReducer from "./graphAPIReducer";

const reducers = combineReducers({
    basicAPI:basicAPIReducer,
    graphAPI:graphAPIReducer
})

export default reducers

export type State = ReturnType<typeof reducers>