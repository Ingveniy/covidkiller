import React from 'react';

import {withRouter} from 'react-router-native';
import {View, Text, StyleSheet} from 'react-native';
import RNExitApp from 'react-native-exit-app';

import Button from '../components/Button';
const Menu = ({history}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CovidKiller</Text>
      <View style={styles.navContainer}>
        <Button
          backgroundColor="#fff"
          color="#ff4340"
          fontWeight="bold"
          fontSize={20}
          title="Начать игру"
          onPress={() => {
            history.push('/game');
          }}
        />
        <Button
          backgroundColor="#000"
          color="#ff4340"
          fontWeight="bold"
          fontSize={16}
          title="Выход"
          onPress={() => {
            RNExitApp.exitApp();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    padding: 30,
  },
  title: {
    fontSize: 30,
    color: '#ff4340',
    textAlign: 'center',
    marginBottom: 20,
  },
  navContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export default withRouter(Menu);
