import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, useColorScheme } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { horizontalScale, verticalScale } from './Metrics';

 function HomeScreen({ navigation }) {
    const scheme = useColorScheme();
    const styles = getStyles(scheme);
  return (
    <View style={styles.container}>
         <LinearGradient
        colors={['#000428', '#004e92']}
        style={styles.background}
      >
      <Text style={styles.text}>
      Create new
      </Text>
      <Text style={styles.text}>
      Account
      </Text>
      
    <View style={styles.container2}>
      <Text style={styles.tapText}>
        Already Registered? 
      </Text>
      <TouchableOpacity>
        <Text style={styles.loginText}>  Log in here</Text>
      </TouchableOpacity>
    </View>


        <View style={styles.inputContainer}>
        <View style={styles}>
            <Text>Name</Text>
        <TextInput
        placeholderTextColor={'white'}
        style={styles.input}
        placeholder="Username"
        // value={username}
        // onChangeText={setUsername}
      />
        </View>
        <View style={styles}>
            <Text>Email</Text>
        <TextInput
        placeholderTextColor={'white'}
        style={styles.input}
        placeholder="Email"
        // value={username}
        // onChangeText={setUsername}
      />
        </View>
        <View style={styles}>
            <Text>Password</Text>
        <TextInput
        placeholderTextColor={'white'}
        style={styles.input}
        placeholder="*******"
        // value={username}
        // onChangeText={setUsername}
      />
        </View>
        <View style={styles}>
        <TouchableOpacity style={styles.BtnSignup} onPress={() => navigation.navigate('AboutUs')}>
        <Text style={styles.BtnSignupTxt} >  Signup</Text>
      </TouchableOpacity>
            </View>
        </View>
        </LinearGradient>
    </View>
  );
}


function getStyles(scheme) {
    return StyleSheet.create({
        BtnSignup:{
            alignItems:"center",
            padding:30,
            paddingBottom:20,
            paddingTop:20,
            backgroundColor: scheme === 'dark' ? '#fff' : '#02140a',
            marginTop:24,
            borderRadius:20
        },
        BtnSignupTxt:{
            color: scheme === 'dark' ? '#000' : '#fff',
        },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: scheme === 'dark' ? '#333' : '#FFF',
  },
  background:{
width:"100%",
height:"100%",
justifyContent: 'center',
alignItems: 'center',
  },
  text: {
    // marginTop:23,
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    color:"#fff"
  },
  register:{
    alignItems:"center",
    justifyContent:"center",
    fontSize:12
  },
  tapText:{
    marginTop:5,
    fontSize:12
  },
  container2:{
    flexDirection: 'row',  // Ensures the text and button are on the same line
    alignItems: 'center', 
  },
  loginText:{
    color:"#496ed6",
    fontSize:12
  },
  inputContainer:{
    width:"100%",
    padding:30,
  },
  input: {
    width: '100%',
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor:"#a0a0a0",
    color:"#fff",
    marginBottom:8,
  },
  
})};

export default HomeScreen;