import React from 'react';
import {NativeRouter} from 'react-router-native';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './src/components/App';
import configureStore from './src/redux';

import {Provider} from 'react-redux';

const store = configureStore();

const AppRegistrator = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <App />
      </NativeRouter>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => AppRegistrator);
