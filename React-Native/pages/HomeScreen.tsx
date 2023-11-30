import React, {useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import GenericButton from '../components/GenericButton.tsx';

function HomeScreen({navigation}: any): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <GenericButton
        text="Onboarding"
        onPress={() => navigation.push('Onboarding')}
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

export default HomeScreen;
