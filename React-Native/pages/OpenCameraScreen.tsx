import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import GenericButton from '../components/GenericButton';

function OpenCamera({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <GenericButton
        text="OpenCamera"
        onPress={() => navigation.push('OpenCamera')}
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

export default OpenCamera;
