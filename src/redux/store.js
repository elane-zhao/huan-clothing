import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

// more scalable to add middlewares to an array and spread the array later
const middlewares = [logger];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export default store;
