import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

function HomeScreen({navigation}: any): JSX.Element {
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
