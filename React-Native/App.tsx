/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import OnboardingScreen from './pages/OnboardingScreen';
import OpenCameraScreen from './pages/OpenCameraScreen';
import LockScreen from './pages/LockScreen';
import MovementDetectionScreen from './pages/MovementDetectionScreen';
import ContactPoliceScreen from './pages/ContactPoliceScreen';
import FindSpaceScreen from './pages/FindSpaceScreen';
import HelpScreen from './pages/HelpScreen';
import SettingsScreen from './pages/SettingsScreen';

import {SettingsProvider} from './contexts/SettingsContext';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SettingsProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{animation: 'slide_from_right'}}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="OpenCamera" component={OpenCameraScreen} />
          <Stack.Screen name="Lock" component={LockScreen} />
          <Stack.Screen
            name="MovementDetection"
            component={MovementDetectionScreen}
          />
          <Stack.Screen name="FindSpace" component={FindSpaceScreen} />
          <Stack.Screen name="ContactPolice" component={ContactPoliceScreen} />
          <Stack.Screen name="Help" component={HelpScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
        </SafeAreaView>
      </NavigationContainer>
    </SettingsProvider>
  );
}

export default App;
