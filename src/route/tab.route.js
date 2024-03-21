import {createNativeStackNavigator} from '@react-navigation/native-stack';


import React from 'react';
import SplashPage from '../page/splash';
import LoginPage from '../page/auth/login';
import RegisterPage from '../page/auth/register';
import BottomNavigation from './bottom.route';
import DetailMessage from '../page/message/details';
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashPage"
      screenOptions={{
        headerShown: false,
      }}>
              <Stack.Screen name="SplashPage" component={SplashPage} />
              <Stack.Screen name="LoginPage" component={LoginPage} />
              <Stack.Screen name="RegisterPage" component={RegisterPage} />
              <Stack.Screen name="MainScreen" component={BottomNavigation} />
              <Stack.Screen name="DetailMessage" component={DetailMessage} />

      </Stack.Navigator>
  );
};

export default TabNavigation;

