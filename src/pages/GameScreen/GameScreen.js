import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {addElement} from '../../redux/elements/actions';

import {View, Text, StyleSheet} from 'react-native';

import SpawnedObject from '../../components/SpawnedObject';
const GameScreen = ({
  elements = [],
  score = 0,
  lastAddCoordinates = {},
  addElement,
}) => {
  // TODO: Что нужно сделать для этого компонента
  useEffect(() => {
    setInterval(() => {
      addElement(lastAddCoordinates, 0, 10, 0.1);
    }, 1000);
  }, []);

  return (
    <View style={styles.gameScreen}>
      <View style={styles.interface}>
        <Text style={styles.score}>Score: {score}</Text>
      </View>
      <View style={styles.gameContainer}>
        {elements.map(element => {
          return (
            <SpawnedObject key={`gameElement-${element.id}`} {...element} />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameScreen: {
    padding: 15,
    flex: 1,
  },
  interface: {
    flex: 1,
  },
  score: {
    fontSize: 16,
  },
  gameContainer: {
    flex: 12,
  },
});

const mapStateToProps = ({elements, score}) => ({
  elements: elements.elementsOnScreen,
  lastAddCoordinates: elements.lastAddCoordinates,
  score: score.score,
});
const mapDispatchToProps = {addElement};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
