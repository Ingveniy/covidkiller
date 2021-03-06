import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import reduxLogger from 'redux-logger';

// TODO: Remove devtools extension in production
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function(preloadedState = {}) {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(reduxLogger)),
  );
}
