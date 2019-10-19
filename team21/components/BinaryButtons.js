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
    Image
  } from 'react-native';
  import personPic from '../assets/personFinal.png';
  import dogPic from '../assets/snoopy2Final.png';
  import { createStackNavigator } from 'react-navigation-stack'
  import DogPage from './DogPage'
  import epilopsy from './epilopsy'


export default class BinaryButtons extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.rotateMe}>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate('epilopsy')}>
                  <Image 
                  style={{width:'50%', height:'50%', justifyContent:'center', alignItems:'center', top:50}}
                  source={personPic}
                  />
                </TouchableOpacity>
      
                <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('DogPage')}>
                  <Image 
                  style={{width:'50%', height:'50%',justifyContent:'center', alignItems:'center', top:50}}
                  source={dogPic}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',   
      alignItems: 'stretch',
      height:'100%'
    },
    rotateMe: {
      //transform: [{ rotate: '90deg'}]
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height:'100%'
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    button1: {
      alignItems: 'center',
      backgroundColor: 'blue',
      color: 'white',
      flex: 1,
      height:'100%',
     // width:400
    },
    button2: {
      alignItems: 'center',
      backgroundColor: 'yellow',
      color: 'white',
      flex: 1,
      height:'100%',
     // width:400
    }
    });