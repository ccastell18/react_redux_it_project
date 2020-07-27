//considered the root reducer
import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

//state: reducer controlling state
export default combineReducers({ log: logReducer, tech: techReducer });
