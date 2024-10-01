
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { checkData, storeData } from './Utility/asyncStorageUtils';
import LinearGradient from 'react-native-linear-gradient';
import { getStyles } from './Style/style';

function Notification() {

  const NotificationLink =[
    {name:"You and @mansim are a match",
      img:"../Assets/LogoMusic.png"
    },
    {name:"@mxbsupercute Hi",
      img:"../Assets/LogoMusic.png"
    },
    {name:"You and @mansim are a match",
      img:"../Assets/LogoMusic.png"
    },
    {name:"You and @reallygood are a match",
      img:"../Assets/LogoMusic.png"
    }
  ]
  return (
    <ImageBackground source={require('../Assets/bg.jpg')} resizeMode="cover" style={styles.background}>
    <Image source={require('../Assets/LogoMusic.png')} style={styles.profileMenu} />
      <LinearGradient
      colors={['#0f8491', '#42814e']}
      style={styles.backgroundG}
    >
       <ScrollView contentContainerStyle={styles.scroll} style={{ width: '100%',height:"100%" }}>
        {NotificationLink?.map((item)=>(
            <View style={styles.notiBox}>
            <Image style={styles.notifImag} source={require('../Assets/LogoMusic.png')}  />
            <Text style={styles.notiTitle}>{item?.name}</Text>
            </View>
        ))}
        {!NotificationLink && <Text>No Notification</Text>}
       
       </ScrollView>
      </LinearGradient>
  </ImageBackground>
  )
}


const styles = StyleSheet.create({
  notiBox:{
flexDirection:"row",
justifyContent:"flex-start",
alignItems:"center",
width:"100%",
padding:22,
borderBottomWidth:3,
borderColor:"#fff"
  },
  scroll:{
    flex:1
  },
  notifImag:{
    width:60,
    height:60
  },
  profileMenu: {
    width: 60,
    height: 60,
    position: 'absolute',
    left: 20,
    top: 15,
  },
  background: {
    width: '100%',
    height: '100%',
    
  },
  backgroundG:{
    flex:1,
    marginTop:80,
    borderTopWidth:3,
    borderColor:"#fff",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    height:"100%"
  }
 
});


export default Notification