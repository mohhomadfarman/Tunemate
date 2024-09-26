import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, useColorScheme } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

 function AboutUs({ navigation }) {
    const scheme = useColorScheme();
    // const styles = getStyles(scheme);
  return (
    <View >
         <LinearGradient
        colors={['#000428', '#004e92']}
        // style={styles.background}
      >
   <Text>Hello</Text>
        </LinearGradient>
    </View>
  );
}



export default AboutUs;