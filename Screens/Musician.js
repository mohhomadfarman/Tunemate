import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, textInputSocial, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { horizontalScale, verticalScale } from '../Metrics';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import Sound from 'react-native-sound';
import DocumentPicker from 'react-native-document-picker';
const { width } = Dimensions.get('window');

Sound.setCategory('Playback');

function Musician({navigation}) {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [currentStep, setCurrentStep] = useState(1); // Stepper state
    const [bio, setBio] = useState(''); // State for bio input
  
    const [sound, setSound] = useState(null);
    const [audioUri, setAudioUri] = useState(null);

    const pickAudioFile = async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.audio], // Allow only audio files
        });
        setAudioUri(res[0].uri); // Save the file URI
        console.log('Selected audio URI:', res[0].uri);
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          console.log('User canceled the picker');
        } else {
          console.log('Unknown error: ', err);
        }
      }
    };
  
     const playSound = () => {
    const sound = new Sound(require('../Assets/music/trumpet-fanfare-63760.mp3'), (error) => {
      if (error) {
        console.log('Error loading sound:', error);
        return;
      }
      sound.play((success) => {
        if (success) {
          console.log('Sound played successfully');
        } else {
          console.log('Playback failed due to audio decoding errors');
        }
        sound.release(); // Release when done to free up resources
      });
    });
    setSound(sound);
  };
    // Function to play the selected audio file
    const playSelectedAudio = () => {
      if (audioUri) {
        const sound = new Sound(audioUri, Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('Error loading sound:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Sound played successfully');
            } else {
              console.log('Playback failed due to audio decoding errors');
            }
            sound.release(); // Release when done to free up resources
          });
        });
        setSound(sound);
      } else {
        console.log('No audio file selected');
      }
    };

  //  END

    const toggleSelection = (type) => {
      if (selectedTypes.includes(type)) {
        setSelectedTypes(selectedTypes.filter(t => t !== type));
      } else {
        setSelectedTypes([...selectedTypes, type]);
      }
    };
  
    // Musician types with steps
    const musicianTypes = {
      Step1: [
        ["Vocalist", "Songwriter"],
        ["Beatmaker", "Producer"],
        ["DJ", "Rapper"],
        ["Engineer", "Sound Designer"],
        ["Remixer", "Band/Group"],
        ["Drummer"]
      ],
      Step2: [
        ["Pianist", "Bassist"],
       
      ],
    };
  
    // Titles for each step
    const stepTitles = {
      1: "What type of musician are you looking for?",
      2: "Link your Social Medias",
      3: "Upload your music",
    };
  
    // Handle next and back buttons
    const handleNext = () => {
      if (currentStep < 6) {
        setCurrentStep(currentStep + 1);
      }
      
    };
  
    const handleBack = () => {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
      }
    };
  
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../Assets/bg.jpg')} resizeMode="cover" style={styles.Image}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Dynamically changing title based on the current step */}
        <Text style={styles.title}>{stepTitles[currentStep]}</Text>

        {currentStep === 2 && (
           <View style={styles.containerSocial}>
      
           {/* Instagram */}
           <View style={styles.socialMediaBox}>
             <Image
               source={require('../Assets/Instagram_icon.png.webp')}
               style={styles.socialImage}
             />
             <TextInput
               style={styles.textInputSocial}
               placeholder="instagramusername"
               placeholderTextColor="#ffffff"
             />
           </View>
     
           {/* TikTok */}
           <View style={styles.socialMediaBox}>
             <Image
               source={require('../Assets/titok.webp')}
               style={styles.socialImage}
             />
             <TextInput
               style={styles.textInputSocial}
               placeholder="tiktokusername"
               placeholderTextColor="#ffffff"
             />
           </View>
     
           {/* SoundCloud */}
           <View style={styles.socialMediaBox}>
             <Image
               source={require('../Assets/SoundCloud_icon.png')}
               style={styles.socialImage}
             />
             <TextInput
               style={styles.textInputSocial}
               placeholder="soundcloudname"
               placeholderTextColor="#ffffff"
             />
           </View>
     
           {/* Spotify */}
           <View style={styles.socialMediaBox}>
             <Image
               source={require('../Assets/Spotify_Primary_Logo_RGB_Black.png')}
               style={styles.socialImage}
             />
             <TextInput
               style={styles.textInputSocial}
               placeholder="spotifyusername"
               placeholderTextColor="#ffffff"
             />
           </View>
     
           {/* YouTube */}
           <View style={styles.socialMediaBox}>
             <Image
               source={require('../Assets/Youtube_logo.png')}
               style={styles.socialImage}
             />
             <TextInput
               style={styles.textInputSocial}
               placeholder="youtubename"
               placeholderTextColor="#ffffff"
             />
           </View>
           
         </View>
        ) }
         {currentStep === 3 && (
         <View style={styles.container}>
      
         {/* First Audio Row */}
         <View style={styles.audioBox}>
           <TouchableOpacity onPress={playSound}>
             <Image
               source={require('../Assets/play.png')}
               style={styles.playIcon}
             />
           </TouchableOpacity>
           <Image
             source={require('../Assets/waves.png')}
             style={styles.waveform}
           />
         </View>
   
         
         {/* Second Audio Row */}
         <View style={styles.audioBox}>
           <TouchableOpacity onPress={playSound}>
             <Image
               source={require('../Assets/play.png')}
               style={styles.playIcon}
             />
           </TouchableOpacity>
           <Image
             source={require('../Assets/waves.png')}
             style={styles.waveform}
           />
         </View>
         
          {/* Third Audio Row with Upload Icon */}
         <View style={styles.audioBox}>
           <TouchableOpacity onPress={playSound}>
             <Image
               source={require('../Assets/play.png')}
               style={styles.playIcon}
             />
           </TouchableOpacity>
           <Image
             source={require('../Assets/material-symbols_upload.png')}
             style={styles.waveform}
           />
         </View>
   
        
        
   
       </View>
        ) }
        {currentStep === 1 && (
          <>
            <Text style={styles.subtitle}>Pick up to 7</Text>
            {musicianTypes[`Step${currentStep}`].map((pair, index) => (
              <View key={index} style={styles.row}>
                {pair.map((type) => (
                  <TouchableOpacity
                    key={type}
                    style={[styles.button, selectedTypes.includes(type) ? styles.buttonSelected : null]}
                    onPress={() => toggleSelection(type)}
                  >
                    <Text style={[styles.buttonText, selectedTypes.includes(type) ? styles.buttonTextSelected : null]}>{type}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </>
        )}

        <View style={styles.footer}>
          {/* Back button */}
          <TouchableOpacity 
            style={[styles.footerButton, currentStep === 1 && styles.disabledButton]} 
            onPress={handleBack} 
            disabled={currentStep === 1}
          >
            <Text style={styles.footerText}>Back</Text>
          </TouchableOpacity>

          {/* Continue button */}
          <TouchableOpacity 
            style={styles.footerButton} 
            onPress={currentStep === 3 ? () => navigation.navigate('ProfileTab') : handleNext}
          >
            <Text style={styles.footerText}>{currentStep === 3 ? 'Finish' : 'Continue'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Don't see your musicianship? Click here</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    gradient: {
      flex: 1,
    },
    Image:{
      flex:1
    },
    contentContainer: {
      padding: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 40,
      color: 'white',
      textAlign: 'center',
      fontWeight: '400',
      marginVertical: 10,
    },
    subtitle: {
      fontSize: 16,
      color: 'white',
      textAlign: 'center',
      fontWeight: '300',
      marginBottom: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginVertical: 10,
    },
    button: {
      backgroundColor: '#fafdfd',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 30,
      width: (width / 2) - 40,
      marginHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    marginOff:{
  marginBottom:0
    },
    buttonSelected: {
      backgroundColor: '#496ed6',
    },
    buttonTextSelected: {
      color: '#fff',
    },
    buttonText: {
      color: '#000',
      fontSize: 12,
      textAlign: 'center',
    },
    bioContainer: {
      width: '100%',
      alignItems: 'center',
      marginTop: 20,
      backgroundColor:"#d9d9d9",
      borderRadius:15,
      padding:25,
      position:"relative",
      marginBottom:"30%"
    },
    bioTitle: {
      color: 'white',
      fontSize: 13,
      marginBottom: 20,
    },
    textInputSocial: {
      backgroundColor: '#EDEDED',
      borderRadius: 10,
      padding: 15,
      width: '100%',
      height: 200,
      textAlignVertical: 'top',
      fontSize: 14,
      color: 'black',
      marginBottom:20
    },
    completeButton: {
      backgroundColor: 'black',
      paddingVertical: 10,
      paddingHorizontal: 70,
      borderRadius: 25,
      marginTop: 20,
      position:"absolute",
      bottom:verticalScale(-30)
    },
    completeButtonText: {
      color: 'white',
      fontSize: 16,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',

      marginTop: 40,
      paddingHorizontal: 20,
    },
    footerButton: {
      padding: 10,
      backgroundColor: 'rgba(0,0,0,0.6)',
      borderRadius: 10,
      width: '45%',
      alignItems: 'center',
    },
    footerText: {
      color: 'white',
    },
    disabledButton: {
      opacity: 0.5,
    },
    link: {
      marginTop: 30,
      marginBottom: 20,
    },
    linkText: {
      color: 'white',
      fontSize: 11,
    },
    containerSocial: {
      // backgroundColor: '#001f3f', // Example background color
      flex: 1,
      width:"100%"
    },
    socialMediaBox: {
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor: '#515151',
      borderRadius: 20,
      padding: 10,
      marginBottom: 20,
    },
    socialImage: {
      width: 50,
      height: 50,
      objectFit:"contain",
      marginRight: 10,
    },
    textInputSocial: {
      flex: 1,
      color: '#ffffff',
      fontSize: 14,
      paddingHorizontal: 15,
      backgroundColor: '#a0a1a7',
      borderRadius: 20,
      padding: 10,
      fontWeight:"300",
      height:60
    },
    audioBox: {
      flex:1,
      width:"100%",
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor: '#515151',
      borderRadius: 20,
      padding: 10,
      marginBottom: 20,
    },
    playIcon: {
      width: 30,
      height: 30,
      marginRight: 10,

    },
    waveform: {
      flex: 1,
      height: 40,
      resizeMode: 'contain',
      backgroundColor: '#a0a0a1',
      borderRadius: 15,
      padding: 10,
      height:60
    },
    uploadIcon: {
      flex: 1,
      width: 30,
      height: 30,
      marginRight: 10,
      backgroundColor: '#a0a0a1',
      borderRadius: 15,
      padding: 10,
      height:60
    },
  });

export default Musician