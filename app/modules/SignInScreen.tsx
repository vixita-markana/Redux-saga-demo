import React from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, signInUserAction } from '../redux';
import { SignInUserType } from '../Types';

const SignInScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { fetching, error }: SignInUserType = useSelector(
    (state: { signInUser: SignInUserType }) => state?.signInUser,
  );

  const onSubmit = () => {
    dispatch(
      signInUserAction.signInUserRequest({
        userName: 'test',
        password: 'test',
      }),
    );
  };

  //  ...
};

export default SignInScreen;
