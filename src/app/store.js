import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk"
import logger from "redux-logger";
import taskReducer from "./reducers/taskReducer";

const store = createStore(
    combineReducers({
        taskReducer: taskReducer
    }),
    {},
    applyMiddleware(thunkMiddleware , logger)
);

export default store;