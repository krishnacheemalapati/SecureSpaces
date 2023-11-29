import React from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';

import {images} from '../constants/images';

function Header({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.push('login')}>
        <Image style={styles.icon} source={images.help} />
      </Pressable>
      <Pressable onPress={() => navigation.push('login')}>
        <Image style={styles.icon} source={images.settings} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'F7F3DF',
  },
  icon: {
    backgroundColor: '00314B',
  },
});

export default Header;
