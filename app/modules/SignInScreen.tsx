import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppDispatch, signInUserAction} from '../redux';

const SignInScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    console.log('call');
    dispatch(
      signInUserAction.signInUserRequest({
        email: 'michael.dunford@stablelogic.com',
        password: 'Aword1231@@',
        twoFactor: 'false',
      }),
    );
  }, [dispatch]);
  return <Text style={{ marginTop: 50 }}>LoginScreen</Text>;
};

export default SignInScreen;
