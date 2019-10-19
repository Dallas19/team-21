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
import BinaryButtons from './components/BinaryButtons'

/*
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
*/
//Orientation.lockToLandscape();

class App extends React.Component {
  render() {
  return (
    
    <View style={styles.container}>
      <BinaryButtons />
    </View>
  );
  }
}

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
export default App;
