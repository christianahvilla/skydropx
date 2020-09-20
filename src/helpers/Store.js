import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

const store = process.env.REACT_APP_NODE_ENV === 'development'
    ? createStore(rootReducer, compose(applyMiddleware(thunkMiddleware, loggerMiddleware), devToolsEnhancer()))
    : createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
