import { AnyAction } from 'redux';
import { DefaultActionCreators, DefaultActionTypes } from 'reduxsauce';

export interface SignInActionTypes extends DefaultActionTypes {
  signInRequest: 'signInProp';
  signInSuccess: 'signInSuccessProp';
  signInFailure: 'signInFailureProp';
}

export interface PayloadType {
  userName: string;
  password: String;
}

export interface SignInInitialStateTypes {
  data: undefined | SignInDataTypes;
  fetching: boolean;
  error: string | undefined;
}

export interface SignInCreators extends DefaultActionCreators {
  signInProp: (payload: PayloadType) => ISignInPropAction;
  signInSuccessProp: (data: SignInDataTypes) => ISignInSuccessPropAction;
  signInFailureProp: (error: string) => ISignInFailurePropAction;
}

export interface SignInDataTypes {
  token: string;
}

export interface SignInActionType {
  data: { data: SignInDataTypes };
  error: string;
}

export interface ISignInPropAction extends AnyAction {
  payload: PayloadType;
}

export interface ISignInSuccessPropAction extends AnyAction {
  data: SignInDataTypes;
}

export interface ISignInFailurePropAction extends AnyAction {
  error: string;
}

export interface ISignInResetPropAction extends AnyAction {}

export interface SignInUserTypes {
  data: SignInDataTypes;
  message?: string;
  status?: number;
}

export interface ErrorTypes {
  error: string;
  message?: string;
  status?: number;
}
export type SignInActions =
  | ISignInPropAction
  | ISignInSuccessPropAction
  | ISignInFailurePropAction
  | AnyAction;

export interface SignInUserActionTypes {
  payload: PayloadType;
  type: string;
}

export interface SignInUserType {
  fetching?: boolean;
  error?: string;
  data?: SignInDataTypes;
}
