import React from 'react';

import {withRouter} from 'react-router-native';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const SpawnedObject = ({type, onPress, x = 0, y = 0}) => {
  // TODO: Что нужно сделать для этого компонента

  console.log(y, 'y');
  console.log(x, 'x');

  return (
    <TouchableOpacity onPress={() => onPress}>
      <View
        style={[
          styles.container,
          {backgroundColor: type === 'good' ? 'green' : 'red'},
          {top: y, left: x},
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 24,
  },
});

export default SpawnedObject;
