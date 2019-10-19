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
  import personPic from '../assets/person_placeholder.png';
  import dogPic from '../assets/dog_placeholder.png';



export default class BinaryButtons extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.rotateMe}>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.button1} onPress={this.onPress}>
                  <Text style={styles.paragraph}> Blue </Text>
                  <Image 
                  style={{width: 50, height: 100}}
                  source={personPic}
                  />
                </TouchableOpacity>
      
                <TouchableOpacity style={styles.button2} onPress={this.onPress}>
                  <Text style={styles.paragraph}> Yellow </Text>
                  <Image 
                  style={{width: 50, height: 100}}
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
      padding: 8,
    },
    rotateMe: {
      transform: [{ rotate: '90deg'}]
    },
    buttons: {
      flex: 1,
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
      padding: 10,
      color: 'white',
      flex: 1,
      height:200
    },
    button2: {
      alignItems: 'center',
      backgroundColor: 'yellow',
      padding: 10,
      color: 'white',
      flex: 1,
      height:200
    }
    });