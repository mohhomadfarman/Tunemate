import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function SplashScreen({ navigation }) {
  return (
    <View  style={styles.container}>
      <LinearGradient
        colors={['#000428', '#004e92']}
        style={styles.background}
      >
        <View >
          <Image
            source={require('./03xxaa.png')}
            style={styles.logo}
          />
          <Text 
          style={styles.brandName}
          >Tunemate</Text>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Text
             style={styles.tapText}
             >Tap to Continue</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background:{
        width:"100%",
        height:"100%",
      justifyContent: 'start',
      alignItems: 'center',
      
    },
    brandName: {
        marginTop:10,
      fontSize: 48,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: "center",
      color:"#fff",
    },
    tapText:{
        marginTop:30,
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        color:"#fff",
    },
    logo:{
        marginTop:100,
        width:300,
        height:200
    }
  });
  