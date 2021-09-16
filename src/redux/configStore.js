import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import homeReducer from './homepage/homepage';

const reducer = combineReducers({
  homeReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
