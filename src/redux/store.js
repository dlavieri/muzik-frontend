import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const composedEnhancers = compose(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composedEnhancers);

export default store;