import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For icons
import Sound from 'react-native-sound'; // For audio
import { Button, TextInput } from 'react-native-paper';

// Enable sound module globally
Sound.setCategory('Playback');

function Profile() {
    // Function to play audio
    const playAudio = (audioFile) => {
        const sound = new Sound(audioFile, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('Failed to load sound', error);
                return;
            }
            sound.play(() => {
                sound.release(); // Release the sound when finished
            });
        });
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
            <Image
                    source={require('../Assets/LogoMusic.png')}
                    style={styles.profileMenu}
                />
                <Image
                    source={require('../Assets/LogoMusic.png')}
                    style={styles.profilePic}
                />
              
            </View>
            <TouchableOpacity style={styles.editProfile}>
                    <Text style={styles.editText}>Edit Profile</Text>
                </TouchableOpacity>

            <Text style={styles.rolesText}>Vocalist • Producer • Rapper • Bassist</Text>
                    <View style={styles.BottomBorderLine}></View>
            <View style={styles.genreContainer}>
            
                <TouchableOpacity style={styles.genreBtn}>
                    <Text style={styles.genreText}>Pop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.genreBtn}>
                    <Text style={styles.genreText}>RnB</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.genreBtn}>
                    <Text style={styles.genreText}>Heavy Metal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.genreBtn}>
                    <Text style={styles.genreText}>House</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.genreBtn}>
                    <Text style={styles.genreText}>Afrobeats</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.bio}>
                I’m a 23-year-old pop and RnB artist. I’ve released 2 songs, and I love to post singing covers on TikTok. I love to collaborate.
            </Text>

            <View style={styles.Demo}>
            <Text style={styles.sectionHeader}>Demos</Text>
            </View>

            <View style={styles.audioSection}>
                <TouchableOpacity onPress={() => playAudio('trumpet-fanfare-63760.mp3')}>
                    <Text style={styles.demoText}>Play Demo 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => playAudio('trumpet-fanfare-63760.mp3')}>
                    <Text style={styles.demoText}>Play Demo 2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => playAudio('trumpet-fanfare-63760.mp3')}>
                    <Text style={styles.demoText}>Play Demo 3</Text>
                </TouchableOpacity>
            </View>

            {/* <View style={styles.socialLinks}>
                <TouchableOpacity>
                    <Icon name="instagram" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="tiktok" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="spotify" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="soundcloud" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="youtube" size={30} color="#fff" />
                </TouchableOpacity>
            </View> */}
              <View style={styles.containerSocial}>
      
      {/* Instagram */}
        <Image
          source={require('../Assets/Instagram_icon.png.webp')}
          style={styles.socialImage}
        />

        <Image
          source={require('../Assets/titok.webp')}
          style={styles.socialImage}
        />
     
        <Image
          source={require('../Assets/SoundCloud_icon.png')}
          style={styles.socialImage}
        />
       
        <Image
          source={require('../Assets/Spotify_Primary_Logo_RGB_Black.png')}
          style={styles.socialImage}
        />

    
        <Image
          source={require('../Assets/Youtube_logo.png')}
          style={styles.socialImage}
        />
       </View>

      
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00416A',
        // padding: 20,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#00002d",
        flex:1,
        padding:30,
        paddingBottom:0,
        paddingTop:0,
        position:"relative",
        height:80
    },
    profileMenu:{
        width:60,
        height:60,
        position: "absolute",
        left:20,
        top:15
    },
    profilePic: {
        width:180,
        height:180,
        borderRadius: 50,
        marginTop:120
        // position: "absolute",
   
    },
    Demo:{

    },
    containerSocial:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:30
    },
    editProfile: {
       textAlign:"end",
       width:"100%",
       justifyContent:"center",
       alignItems:"flex-end",
       paddingEnd:15,
       marginVertical:10
    },
    editText: {
        color: '#fff',
        fontWeight: '400',
        fontSize:12
    },
    rolesText: {
        marginTop: 70,
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        paddingBottom:30,
       
    },
    BottomBorderLine:{
 borderBottomWidth:1,
        borderColor:"#fff",
        width:"50%",
        justifyContent:"center",
        alignContent:"center",
        margin:"auto"
    },
    genreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    genreBtn: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    genreText: {
        color: '#fff',
        fontSize: 10,
    },
    bio: {
        backgroundColor: '#f2f4ff',
        padding: 15,
        paddingHorizontal:2,
        borderRadius: 10,
        color: '#000',
        textAlign: 'center',
        marginVertical: 5,
        marginHorizontal: 15,
        fontSize: 11

    },
    sectionHeader: {
        fontSize: 16  ,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    audioSection: {
        marginVertical: 10,
    },
    demoText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 10,
    },
    socialLinks: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 30,
    },
    socialImage: {
        width: 50,
        height: 50,
        objectFit:"contain",
        marginRight: 10,

      },
});

export default Profile;
