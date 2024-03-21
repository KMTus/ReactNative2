import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { StackActions } from '@react-navigation/native';

const iconApp = require("../../assets/smartphone.png");

const SplashPage = ({navigation}) => {

  useEffect(()=>{
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("LoginPage"));
    }, 3000);
  },[])
    
  
  return (
    <View style={styles.container}>
        <Image source={iconApp} style={{ width: 180, height: 180 }} />
    </View>
  );
};

export default SplashPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
