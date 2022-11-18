import {combineReducers} from 'redux';
import signInUserAction, {
  signInUserReducer,
  SignInUserTypes,
} from './SignInUser';

import type {AppDispatch} from './Store';

const rootReducer = combineReducers({
  signInUser: signInUserReducer,
});

export default rootReducer;
export {signInUserAction};
export {AppDispatch, SignInUserTypes};
