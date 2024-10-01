import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
  Image,
  TextInput,
  Dimensions,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getStyles} from './Style/style';
import TextInputField from '../components/Inputs';

function AboutUs({navigation}) {
  const scheme = useColorScheme();
  const styles = getStyles(scheme);
  const screenHeight = Dimensions.get('window').height
  return (
    <View style={styles.container}>
       <ImageBackground source={require('../Assets/bg.jpg')} resizeMode="cover" style={styles.image}>
        <ScrollView contentContainerStyle={styles.scroll} style={{ width: '90%', height:"100%" }}>
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
            <TouchableOpacity 
              accessibilityRole="button" 
              activeOpacity={0.7} 
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}> Log in here</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapper}>
              <Image
                source={require('../Assets/LogoMusic.png')}
                style={styles.ImagesProfile}
              />

           {/* <TextInputField style={styles.width100} inputColor={"#fff"} placeholder="Username" /> */}

           <View style={styles.width100}>
      <Text style={{textAlign:"center", marginTop:60, color:"#fff"}}>Create Username</Text>

      <TextInput
        placeholderTextColor={scheme === 'dark' ? '#737373' : '#737373'}
        style={styles.inputOnbording}
        placeholder={"Username"}
      />
    </View>
          </View>

 
          <TouchableOpacity onPress={()=>navigation.navigate("ProfileStepOne")} style={styles.BtnSignup} >
              <Text style={styles.BtnSignupTxt}>Complete and
Continue
</Text>
            </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default AboutUs;
