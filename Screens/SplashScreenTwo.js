// import { Image } from '@rneui/base';
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, useColorScheme, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from '../Metrics';
import SplashBox from '../components/SplashBox';
function SplashScreenTwo({ navigation }) {
  const scheme = useColorScheme();

 
  return (
    <View  style={styles.container}>
     <ImageBackground source={require('../Assets/bg.jpg')} resizeMode="cover" style={styles.background}>
 
      <SplashBox
       Route={()=>navigation.navigate('ProfileStepTwo')}
       LogoImage={require('../Assets/LogoMusic.png')}
       meinTitle="Step 1 Complete"
       SubTitle="Welcome,Mansi"
       subStyle={styles}
       />
    </ImageBackground>
    
  </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    widths:{
        width:"60%"
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
    welcomText:{
        fontSize: moderateScale(42),
        fontWeight:"300",
        justifyContent: 'center',
        textAlign:"center",
        color:"#99c1da"
    },
    brandName: {
        marginTop:10,
      fontSize: moderateScale(40),
      fontWeight:"500",
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: "center",
      color:"#fff",
    },
    welcomContainer:{
        width:"60%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20
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
  

export default SplashScreenTwo;