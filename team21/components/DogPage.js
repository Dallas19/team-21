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
  import dogBowl from '../assets/dogBowl1Final.png';
  import dogPlaying from '../assets/dogPlayingFinal.png';



export default class BinaryButtons extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.rotateMe}>
              <View style={styles.buttons }>
                <TouchableOpacity style={styles.button1} onPress={() => {
                  fetch('http://100.118.223.150:8080/call').then( 
                    () => console.log('resolved'), 

                  ).catch(console.log('bruh'));                }}>
                  <Image 
                  style={{width: 200, height: 200, justifyContent:'center', alignItems:'center', top:50}}
                  source={dogBowl}
                  />
                </TouchableOpacity>
      
                <TouchableOpacity style={styles.button2} onPress={() => {
                  fetch('http://100.118.223.150:8080/call').then( 
                    () => console.log('resolved'), 

                  ).catch(console.log('bruh'));                  
                
                }}>
                  <Image 
                  style={{width: 200, height: 200, justifyContent:'center', alignItems:'center', top:50}}
                  source={dogPlaying}
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
      height: '100%'
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
      //width:400
    },
    button2: {
      alignItems: 'center',
      backgroundColor: 'yellow',
      color: 'white',
      flex: 1,
      height:'100%'
      //width:400
    }
    });