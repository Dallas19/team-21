/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Card
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import BinaryButtons from './components/BinaryButtons'
import BigButton from './components/BigButton'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'



export default class App extends React.Component {
  render() {
    return <AppContainer  style={styles.container}/>;
  }
}

const RootStack = createStackNavigator(
  {
    Home: BigButton,
    BinaryButtons: BinaryButtons,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);




const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#ecf0f1',
  alignItems: 'stretch',
},

rotateMe: {
  //transform: [{ rotate: '90deg'}]
},
paragraph: {
  margin: 24,
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
}
});
