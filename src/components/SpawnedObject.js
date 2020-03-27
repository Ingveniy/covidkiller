import React from 'react';
import {connect} from 'react-redux';
import {addPoints} from '../redux/score/actions';
import {removeElement} from '../redux/elements/actions';

import {TouchableOpacity, StyleSheet} from 'react-native';

const SpawnedObject = ({
  id,
  type,
  x,
  y,
  score,
  liveTime,
  addPoints,
  removeElement,
}) => {
  // Что нужно сделать для этого элемента
  // - Прописать анимацию появления и исчезания

  const objectRemover = this.setTimeout(() => {
    console.log('Object setTimeout');
    if (type === 'good') {
      addPoints(-score);
    }
    removeElement(id);
  }, liveTime);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: type === 'good' ? 'green' : 'red'},
        {top: y, left: x},
      ]}
      onPress={() => {
        console.log('Object click');
        addPoints(score);
        removeElement(id);
        clearTimeout(objectRemover);
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    borderRadius: 24,
  },
});

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = {
  addPoints,
  removeElement,
};
export default connect(mapStateToProps, mapDispatchToProps)(SpawnedObject);
