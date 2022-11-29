import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware({ sagaMonitor: undefined });
const middleWare = [sagaMiddleware];

// Add middleware to redux store
const middlewares = applyMiddleware(...middleWare);

const store = createStore(rootReducer, compose(middlewares));

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export default store;
