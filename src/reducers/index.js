//considered the root reducer
import { combineReducers } from 'redux';
import logReducer from './logReducer';

//state: reducer controlling state
export default combineReducers({ log: logReducer });
