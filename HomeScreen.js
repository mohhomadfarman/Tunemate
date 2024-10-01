import React from 'react';
import { View, Text, TouchableOpacity, TextInput, useColorScheme, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { horizontalScale, verticalScale } from './Metrics';
import TextInputField from './components/Inputs';
import { getStyles } from './Screens/Style/style';
function HomeScreen({ navigation }) {
  const scheme = useColorScheme();
  const stylesHome = getStylesPage(scheme);
  const Styles = getStyles(scheme);

  // Reusable TextInputField component to reduce repetition
 
  return (
    <View style={stylesHome.container}>
       <ImageBackground source={require('./Assets/bg.jpg')} resizeMode="cover" style={stylesHome.image}>
        <ScrollView contentContainerStyle={stylesHome.scroll} style={{ width: '90%' }}>
          <Text style={stylesHome.text}>Create new</Text>
          <Text style={stylesHome.text}>Account</Text>

          <View style={Styles.container2}>
            <Text style={Styles.tapText}>Already Registered?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={Styles.loginText}> Log in here</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesHome.inputContainer}>
            <TextInputField label="Name" placeholder="Username" />
            <TextInputField label="Email" placeholder="Email" />
            <TextInputField label="Password" placeholder="*******" />

            <TouchableOpacity style={stylesHome.BtnSignup} onPress={() => navigation.navigate('Signup')}>
              <Text style={stylesHome.BtnSignupTxt}>Signup</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};


function getStylesPage(scheme) {
  const isDark = scheme === 'dark';
  
  return StyleSheet.create({
    BtnSignup: {
      alignItems: 'center',
      paddingVertical: verticalScale(20), // Consolidated paddingTop & paddingBottom
      paddingHorizontal: horizontalScale(30),
      backgroundColor: isDark ? '#fff' : '#02140a',
      marginTop: verticalScale(24),
      borderRadius: 20
    },
    image: {
      flex: 1,
      width:"100%",
      justifyContent: 'center',
      alignItems:"center"
    },
    BtnSignupTxt: {
      color: isDark ? '#000' : '#fff',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDark ? '#333' : '#FFF',
    },
    background: {
      width:"100%",
      flex: 1, // Replaces explicit height/width with flex
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: horizontalScale(35), // Scalable font size
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#fff',
    },
    register: {
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: horizontalScale(12),
    },
    tapText: {
      marginTop: verticalScale(5),
      fontSize: horizontalScale(12),
    },
    container2: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginText: {
      color: '#496ed6',
      fontSize: horizontalScale(12),
    },
    inputContainer: {
      width: '100%',
      padding: horizontalScale(15),
    },
    input: {
      width: '100%',
      height: verticalScale(60), // Scalable height
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: verticalScale(10),
      padding: horizontalScale(10),
      borderRadius: 15,
      backgroundColor: '#a0a0a0',
      color: '#fff',
      marginBottom: verticalScale(8),
    },
    scroll: {
      // flex: 1,  // Replaces height & width with flex
      textAlign: 'center',
      marginTop: verticalScale(100),
    },
  });
};

export default HomeScreen;