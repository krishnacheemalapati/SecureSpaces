import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {images} from '../constants/images';

function Header({warning}: any): JSX.Element {
  return (
    <View style={warning ? styles.headerWarning : styles.header}>
      <View style={styles.iconBar}>
        <Image
          style={styles.largeImage}
          source={images.help}
          tintColor={warning && 'white'}
        />
        <Image
          style={styles.largeImage}
          source={images.settings}
          tintColor={warning && 'white'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ECE2B2',
    height: 60,
    alignSelf: 'flex-start',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 18,
  },
  headerWarning: {
    backgroundColor: '#F93A3A',
    height: 60,
    alignSelf: 'flex-start',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 18,
  },
  iconBar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default Header;
