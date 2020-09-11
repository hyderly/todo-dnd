import {createStore,applyMiddleware} from 'redux';

import {combineReducers} from 'react-redux';

import {logger} from 'redux-logger';

const middleware = [logger];

const reducers = combineReducers({
    task: taskReducer,
})


export const store  = createStore(reducers, applyMiddleware(...logger));