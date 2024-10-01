import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import AboutUs from './Screens/About';
import Login from './Screens/Login';
import Forget from './Screens/Forget';
import SplashScreenTwo from './Screens/SplashScreenTwo';
import SplashScreenThree from './Screens/SplashScreenThree';
import MusicianTypeScreen from './Screens/MusicianTypeScreen';
import SplashScreenFive from './Screens/SplashScreenFive';
import Musician from './Screens/Musician';
import Profile from './Screens/Profile';
import Notification from './Screens/Notification';
import User from './Screens/User';
import SplashScreenFour from './Screens/SplashScreenFour';
import MusicianTypeScreen2 from './Screens/MusicianTypeScreen2';

// Stack and Tab Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Consolidated Profile Tab Navigator
function ProfileTabNavigator({ hiddenTab }) {
  return (
    <Tab.Navigator
     initialRouteName="Profile"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName = route.name === 'Profile' ? (focused ? 'person' : 'person-outline') : null;
          return iconName ? <Icon name={iconName} size={size} color="#000" /> : null;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: hiddenTab ? { display: 'none' } : undefined,
      })}
    >
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

// Main App Navigator
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={AboutUs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forget"
          component={Forget}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileStepOne"
          component={SplashScreenTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileStepTwo"
          component={SplashScreenThree}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MusicianTypeScreen"
          component={MusicianTypeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MusicianTypeScreen2"
          component={MusicianTypeScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashScreenFive"
          component={SplashScreenFive}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="SplashScreenFour"
          component={SplashScreenFour}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Musician"
          component={Musician}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileTab"
          component={() => <ProfileTabNavigator hiddenTab={false} />}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileTabNavigatorStep"
          component={() => <ProfileTabNavigator hiddenTab={true} />}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
