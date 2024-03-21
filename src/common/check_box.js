import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const iconTick = require('../assets/check.png');
const CheckBox = ({ checked, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 20,
        height: 20,
        borderWidth: checked ? 1 : 2,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: checked ? 'black' : 'transparent',
        borderRadius: 3,
      }}
    >
      {checked && <Image source={iconTick} width={20} height={20} />}
    </TouchableOpacity>
  );
};


export default CheckBox;

const styles = StyleSheet.create({});
