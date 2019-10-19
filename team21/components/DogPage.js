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
  import dogBowl from '../assets/dog_bowl.jpg';
  import dogPlaying from '../assets/dog_playing.jpg';



export default class BinaryButtons extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.rotateMe}>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.button1} onPress={() => {
                  fetch('http://100.118.223.150:8080/call').then( 
                    () => console.log('resolved'), 

                  ).catch(console.log('bruh'));                }}>
                  <Text style={styles.paragraph}> Blue </Text>
                  <Image 
                  style={{width: 50, height: 100}}
                  source={dogBowl}
                  />
                </TouchableOpacity>
      
                <TouchableOpacity style={styles.button2} onPress={() => {
                  fetch('http://100.118.223.150:8080/call').then( 
                    () => console.log('resolved'), 

                  ).catch(console.log('bruh'));                  
                
                }}>
                  <Text style={styles.paragraph}> Yellow </Text>
                  <Image 
                  style={{width: 50, height: 100}}
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
      
    },
    rotateMe: {
      //transform: [{ rotate: '90deg'}]
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
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
      //padding: 10,
      color: 'white',
      flex: 1,
      height:200,
      width:400
    },
    button2: {
      alignItems: 'center',
      backgroundColor: 'yellow',
      //padding: 10,
      color: 'white',
      flex: 1,
      height:200,
      width:400
    }
    });