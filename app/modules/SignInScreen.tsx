import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, signInUserAction} from '../redux';

interface SignInUserType {
  fetching: string;
  error: string;
  signInUser: {token: string};
}

const SignInScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {fetching, error}: {fetching: string; error: string} = useSelector(
    (state: {signInUser: SignInUserType}) => state?.signInUser,
  );
  const onSubmit = () => {
    dispatch(
      signInUserAction.signInUserRequest({
        email: 'test',
        password: 'test',
      }),
    );
  };

  // code
};

export default SignInScreen;
