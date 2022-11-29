import { all, takeLatest } from 'redux-saga/effects';
import { SignInUserTypes } from '../redux';

import { Api } from '../services';

import { signInUser } from './AuthSaga';

const apiAuth = Api.auth();

export default function* rootSaga() {
  yield all([
    takeLatest(SignInUserTypes.SIGN_IN_USER_REQUEST, signInUser, apiAuth),
  ]);
}
