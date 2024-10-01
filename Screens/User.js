import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { checkData, storeData } from './Utility/asyncStorageUtils';

function User() {
  const navigation = useNavigation();
  const [data, setData] = useState(null);  // To store the fetched data

  useEffect(() => {

    const fetchData = async () => {
      const result = await checkData(navigation);
      setData(result);  // Update the state with the stored data
      if(result === "0"){
        navigation.navigate('SplashScreenFive')
      }
    };
    fetchData();

  }, [navigation]);

  const onClick = async () => {
    await storeData("1");  // Await the storage to complete and update the value to "1"
    navigation.navigate('MusicianTypeScreen2');  // Navigate afterward
  };

  return (
    <ImageBackground source={require('../Assets/bg.jpg')} resizeMode="cover" style={styles.background}>
      <Image source={require('../Assets/LogoMusic.png')} style={styles.profileMenu} />
      <View style={styles.viewBox}>
        <Text style={styles.textTitle}>Customize your matches</Text>
        <Text style={styles.textSub}>
          You can filter the matches we show you based on your preferences or get randomly matched
        </Text>
      </View>
      <View style={styles.viewBox}>
        <TouchableOpacity onPress={onClick} style={styles.FilterBox}>
          <Text>Filter your matches</Text>
        </TouchableOpacity>
        <Text style={styles.TxtDivide}>OR</Text>
        <TouchableOpacity style={styles.FilterBox}>
          <Text>Get randomly matched</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  viewBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    width: '100%',
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
  textTitle: {
    textAlign: 'center',
    fontSize: 48,
    color: '#fff',
    marginBottom: 8,
  },
  textSub: {
    textAlign: 'center',
    fontSize: 14,
    color: '#99c1da',
  },
  FilterBox: {
    backgroundColor: '#a0a1a0',
    width: '100%',
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TxtDivide: {
    marginVertical: 30,
  },
});

export default User;
