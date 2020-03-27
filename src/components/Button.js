import React from 'react';

import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const Button = ({
  onPress,
  title = '',
  color = '#ff4340',
  fontSize = 18,
  fontWeight = 'normal',
  backgroundColor = '#fff',
}) => {
  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor}]} onPress={onPress}>
      <Text style={[styles.btn_text, {color, fontSize, fontWeight}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text: {},
});

export default Button;
