import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Card,
    Image,
    Link
  } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import personPic from '../assets/snoopy.jpg'
import alertPic from '../assets/alert.png'
import BinaryButtons from './BinaryButtons'


  export default class BigButton extends React.Component {
      render() {
          return (
            <View>
            <TouchableOpacity 
            style={styles.button} 
            onPress={() => this.props.navigation.navigate('BinaryButtons')}
            >
              <Image source={alertPic}/>
            </TouchableOpacity>
            </View>
          );
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
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            color: 'blue',
            backgroundColor: 'blue',
            height:'100%'

          },
});