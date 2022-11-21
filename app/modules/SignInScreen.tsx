import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
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
    (state: {signInUser: SignInUserType}) => state.signInUser,
  );
  const onSubmit = () => {
    dispatch(
      signInUserAction.signInUserRequest({
        email: 'michael.dunford@stablelogic.com',
        password: 'Aword1231@@',
        twoFactor: 'false',
      }),
    );
  };

  return (
      <Text style={{backgroundColor: 'red', padding: 30}} onPress={() => console.log('callll')}>SignIn Screen</Text>

  );
};

export default SignInScreen;
