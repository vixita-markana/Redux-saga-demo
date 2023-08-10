import { combineReducers } from 'redux';
import type { AppDispatch } from './Store';
import {
  AuthSelectors,
  SignInUserTypes,
  signInUserAction,
  signInUserReducer,
} from './signInUser';

const rootReducer = combineReducers({
  data: signInUserReducer,
});

export default rootReducer;
export * from './useRedux';
export { AppDispatch, AuthSelectors, SignInUserTypes, signInUserAction };
