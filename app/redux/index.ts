import { combineReducers } from 'redux';
import {
  signInUserAction,
  signInUserReducer,
  SignInUserTypes,
  AuthSelectors,
} from './signInUser';

import type { AppDispatch } from './Store';

const rootReducer = combineReducers({
  data: signInUserReducer,
});

export default rootReducer;
export { AppDispatch, SignInUserTypes, signInUserAction, AuthSelectors };
export * from './useRedux';
