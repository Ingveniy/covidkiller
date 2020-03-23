import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Route, Switch} from 'react-router-native';

import Menu from '../pages/Menu';
import GameScreen from '../pages/GameScreen';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path={`/`} component={Menu} />
        <Route exact path={`/game`} component={GameScreen} />
      </Switch>
    </>
  );
};

export default App;
