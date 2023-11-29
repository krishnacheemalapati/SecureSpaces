import React from 'react';
import {View, StyleSheet} from 'react-native';

function Background(): JSX.Element {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'F7F3DF',
  },
});

export default Background;
