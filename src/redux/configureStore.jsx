import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stockReducer from './stockData';

const reducer = combineReducers({
  stockReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;