import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../page/home';
import {Image, StyleSheet, Text} from 'react-native';
import FavouritePage from '../page/favourite';
import MessagePage from '../page/message';
import BillPage from '../page/bill';
import ProfilePage from '../page/profile';

import { Provider } from 'react-redux';
import store from '../page/home/redux/store';

const BottomBar = createBottomTabNavigator();

const iconHome = require('../assets/home.png');
const iconFavourite = require('../assets/heart.png');
const iconMessage = require('../assets/telegram.png');
const iconBill = require('../assets/receip.png');
const iconProfile = require('../assets/profile-user.png');


const Home = () => {
  return(
    <Provider store={store}>
        <HomePage/>
    </Provider>
  )
}

const Favourite = () => {
  return(
    <Provider store={store}>
        <FavouritePage/>
    </Provider>
  )
}

const BottomNavigation = () => {
  return (
    <BottomBar.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
      }}>
      <BottomBar.Screen
        component={Home}
        name="HomePage"
        options={{
          tabBarIcon: ({color, size, focused}) => <Image source={iconHome} />,
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                color: focused ? '#DBA668' : 'transparent',
                fontSize: 14,
                marginTop: -3,
              }}>
              Home
            </Text>
          ),
        }}
      />

      <BottomBar.Screen
        component={Favourite}
        name="FavouritePage"
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image source={iconFavourite} />
          ),
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                color: focused ? '#DBA668' : 'transparent',
                fontSize: 14,
                marginTop: -3,
              }}>
              Favourite
            </Text>
          ),
        }}
      />

      <BottomBar.Screen
        component={MessagePage}
        name="MessagePage"
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image source={iconMessage} />
          ),
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                color: focused ? '#DBA668' : 'transparent',
                fontSize: 14,
                marginTop: -3,
              }}>
              Message
            </Text>
          ),
        }}
      />

      <BottomBar.Screen
        component={BillPage}
        name="BillPage"
        options={{
          tabBarIcon: ({color, size, focused}) => <Image source={iconBill} />,
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                color: focused ? '#DBA668' : 'transparent',
                fontSize: 14,
                marginTop: -3,
              }}>
              Bill
            </Text>
          ),
        }}
      />

      <BottomBar.Screen
        component={ProfilePage}
        name="ProfilePage"
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Image source={iconProfile} />
          ),
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                color: focused ? '#DBA668' : 'transparent',
                fontSize: 14,
                marginTop: -3,
              }}>
              Account
            </Text>
          ),
        }}
      />
    </BottomBar.Navigator>
  );
};



export default BottomNavigation;
const styles = StyleSheet.create({
  tabBarStyle: {
    height: 55,
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: '#f5f5f5',
  },
  tabBarItemStyle: {
    height: 55,
  },
});
