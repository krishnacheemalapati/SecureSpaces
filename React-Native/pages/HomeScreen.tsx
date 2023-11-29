import React, {useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function HomeScreen({navigation}: any): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Login Gandujiya (गांडू लॉगिन करें)"
        onPress={() => navigation.push('Login')}
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
