import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { checkData, storeData } from './Screens/Utility/asyncStorageUtils';

export default function SplashScreen({ navigation }) {
  useEffect(() => {

    const fetchData = async () => {
      await storeData("0"); 
    };
    fetchData();

  }, [navigation]);
  return (
    <View  style={styles.container}>
      {/* <LinearGradient
        colors={['#000428', '#004e92']}
        style={styles.background}
      > */}
      <ImageBackground source={require('./Assets/bg.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.brandbox} >
          <Image
            source={require('./Assets/LogoMusic.png')}
            style={styles.logo}
            alt='Select Images'
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
        </ImageBackground>
      {/* </LinearGradient> */}
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    brandbox:{
      flex:1,
      justifyContent: 'star',
      alignItems: 'center',
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
      fontWeight:"500",
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: "center",
      color:"#fff",
    },
    tapText:{
        marginTop:20,
        fontSize: 14,
        fontWeight:"300",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        color:"#fff",
    },
    logo:{
        marginTop:100,
        width:200,
        height:200
    }
  });
  