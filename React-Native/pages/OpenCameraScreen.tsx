import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import GenericButton from '../components/GenericButton';

function OpenCameraScreen({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Open Camera Screen</Text>
      <GenericButton text="Badoom" />
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
