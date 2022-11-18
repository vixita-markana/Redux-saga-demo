import {AnyAction} from 'redux';
import {
  createActions,
  createReducer,
  DefaultActionCreators,
  DefaultActionTypes,
} from 'reduxsauce';

export interface ISignInTypes extends DefaultActionTypes {
  signInRequest: 'signInProp';
  signInSuccess: 'signInSuccessProp';
  signInFailure: 'signInFailureProp';
  signInReset: 'signInResetProp';
}

export interface SignInInitialStateTypes {
  user?: null | ISignInDataTypes;
  fetching?: boolean;
  error?: boolean;
}

interface ISignInDataTypes {
  token: string;
}

export interface SignInActionType {
  token?: string;
  data?: ISignInDataTypes;
  type?: string;
  error: string;
}

export interface ISignInPropAction extends AnyAction {
  payload: {userName: string; password: string};
}

export interface ISignInSuccessPropAction extends AnyAction {
  data: ISignInDataTypes;
}

export interface ISignInFailurePropAction extends AnyAction {
  error: string;
}

export interface ISignInResetPropAction extends AnyAction {}

export interface ISignInCreators extends DefaultActionCreators {
  signInProp: (payload: {
    userName: string;
    password: string;
  }) => ISignInPropAction;
  signInSuccessProp: (data: ISignInDataTypes) => ISignInSuccessPropAction;
  signInFailureProp: (error: string) => ISignInFailurePropAction;
  signInResetProp: () => ISignInResetPropAction;
}

export type ISignInActions =
  | ISignInPropAction
  | ISignInSuccessPropAction
  | ISignInFailurePropAction
  | ISignInResetPropAction
  | AnyAction;

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions<ISignInTypes, ISignInCreators>({
  signInUserRequest: ['payload'],
  signInUserSuccess: ['data'],
  signInUserFailure: ['error'],
});

export const SignInUserTypes: ISignInTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE: SignInInitialStateTypes = {
  user: null,
  fetching: false,
  error: undefined,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = (_state: SignInInitialStateTypes) => {
  return {fetching: true, user: null, error: null};
};

// successful api lookup
export const success = (
  state: SignInInitialStateTypes,
  action: SignInActionType,
) => {
  const {token}: ISignInDataTypes = action;
  return {
    fetching: false,
    error: false,
    user: {token},
  };
};

// Reset user
export const reset = (_state: SignInInitialStateTypes) => {
  return INITIAL_STATE;
};

// Something went wrong somewhere.
export const failure = (
  state: SignInInitialStateTypes,
  action: SignInActionType,
) => {
  const {error}: {error: string} = action;
  return Object.assign(state, {fetching: false, error});
};

/* ------------- Hookup Reducers To Types ------------- */

export const signInUserReducer = createReducer<
  SignInInitialStateTypes,
  ISignInActions
>(INITIAL_STATE, {
  [Types.SIGN_IN_USER_REQUEST]: request,
  [Types.SIGN_IN_USER_SUCCESS]: success,
  [Types.SIGN_IN_USER_FAILURE]: failure,
});
