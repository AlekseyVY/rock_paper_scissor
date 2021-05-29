import { createStore, combineReducers } from 'redux';
import gameReducer from './gameReducer';

export const store = createStore(combineReducers({ gameReducer }));
