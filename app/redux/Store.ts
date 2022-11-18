import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './index';
import rootSaga from '../saga/index';

const sagaMiddleware = createSagaMiddleware({sagaMonitor: undefined});
const middleWare = [sagaMiddleware];

// Add middleware to redux store
const middlewares = applyMiddleware(...middleWare);

const store = createStore(rootReducer, compose(middlewares));

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

// Enable persistence
export default {store};
