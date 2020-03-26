import React from 'react';

import {withRouter} from 'react-router-native';
import {View, Text, Image, StyleSheet} from 'react-native';

import SpawnedObject from '../../components/SpawnedObject';
const GameScreen = () => {
  // TODO: Что нужно сделать для этого компонента

  return (
    <View style={styles.gameScreen}>
      <View style={styles.interface}>
        <Text>Score: 10</Text>
      </View>
      <View style={styles.gameContainer}>
        <SpawnedObject type={'good'} onPress={() => {}} x={'30%'} y={'80%'} />
        <SpawnedObject type={'bad'} onPress={() => {}} x={'50%'} y={'90%'} />
        <SpawnedObject type={'good'} onPress={() => {}} x={'10%'} y={'50%'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
  },
  interface: {
    flex: 1,
    backgroundColor: 'blue',
  },
  gameContainer: {
    flex: 12,
    backgroundColor: 'yellow',
  },
});

export default GameScreen;
