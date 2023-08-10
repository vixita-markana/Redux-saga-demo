import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import rootReducer from './';

const sagaMiddleware = createSagaMiddleware({ sagaMonitor: undefined });
const middleWare = [sagaMiddleware];

// Add middleware to redux store
const middlewares = applyMiddleware(...middleWare);

const store = createStore(rootReducer, compose(middlewares));

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;

export default store;
