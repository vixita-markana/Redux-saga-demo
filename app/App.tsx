import React, {FC} from 'react';

import {Provider} from 'react-redux';

import SignInScreen from './modules/SignInScreen';

import reduxStore from './redux/Store';

const App: FC = () => {
  return (
    <Provider store={reduxStore.store}>
      <SignInScreen />
    </Provider>
  );
};

export default App;
