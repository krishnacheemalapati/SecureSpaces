import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function LoginScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'black',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
