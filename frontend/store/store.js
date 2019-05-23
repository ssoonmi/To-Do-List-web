import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

export default function (preloadedState = {}) {
  let middlewares;

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    middlewares = [thunk, logger];
  } else {
    middlewares = [thunk];
  }

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
}