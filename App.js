import 'react-native-gesture-handler';
import * as React from 'react';

import {Provider} from 'react-redux';

import store from './components/redux/store';

import {Navigation} from './components/Navigation';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
