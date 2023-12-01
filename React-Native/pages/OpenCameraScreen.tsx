import React, {useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import GenericButton from '../components/GenericButton.tsx';

function OpenCameraScreen({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Open Camera Screen</Text>
      <GenericButton
        text="Badoom"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OpenCameraScreen;
