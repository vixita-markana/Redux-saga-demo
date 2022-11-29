import { createActions } from 'reduxsauce';
import {
  SignInInitialStateTypes,
  SignInDataTypes,
  SignInActionType,
  SignInActions,
  SignInActionTypes,
  SignInCreators,
} from '../Types';

/* ------------- Initial State ------------- */
export const INITIAL_STATE: SignInInitialStateTypes = {
  user: null,
  fetching: false,
  error: undefined,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = (_state: SignInInitialStateTypes) => {
  return { fetching: true, user: null, error: null };
};
const { Types, Creators } = createActions<SignInActionTypes, SignInCreators>({
  signInUserRequest: ['payload'],
  signInUserSuccess: ['data'],
  signInUserFailure: ['error'],
});

export const SignInUserTypes: SignInActionTypes = Types;
export default Creators;

// successful api lookup
export const success = (
  state: SignInInitialStateTypes,
  action: SignInActionType,
) => {
  const { token }: SignInDataTypes = action;
  return {
    fetching: false,
    error: false,
    user: { token },
  };
};

// Something went wrong somewhere.
export const failure = (
  state: SignInInitialStateTypes,
  action: SignInActionType,
) => {
  const { error }: { error: string } = action;
  return Object.assign(state, { fetching: false, error });
};

/* ------------- Hookup Reducers To Types ------------- */

export const signInUserReducer = createReducer<
  SignInInitialStateTypes,
  SignInActions
>(INITIAL_STATE, {
  [Types.SIGN_IN_USER_REQUEST]: request,
  [Types.SIGN_IN_USER_SUCCESS]: success,
  [Types.SIGN_IN_USER_FAILURE]: failure,
});
