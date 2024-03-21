import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './src/route/tab.route'

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation/>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})