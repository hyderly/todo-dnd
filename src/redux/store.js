import { createStore, applyMiddleware } from "redux";

import { combineReducers } from "redux";

import { logger } from "redux-logger";

import taskReducer from "./task/task.reducer";

const middleware = [logger];

const rootReducer = combineReducers({
  task: taskReducer,
});

export const store = createStore(rootReducer, applyMiddleware(...middleware));
