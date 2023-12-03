import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

import {images} from '../constants/images';

function Footer({locked, warning}: any): JSX.Element {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: locked ? 0 : -40,
        width: '100%',
      }}>
      <Image
        style={styles.footerImage}
        source={warning ? images.footerWarning : images.footer}
      />
      {locked && (
        <View style={styles.timeText}>
          <View style={styles.footerText}>
            <Text style={styles.footerDescription}>LOCKED FOR</Text>
            <Image style={styles.checkImage} source={images.helpYellow} />
          </View>

          <Text style={styles.footerLargeText}>29:59</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  footerImage: {
    width: '100%',
  },
  timeText: {
    position: 'absolute',
    bottom: 30,
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
  },
  footerText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerDescription: {
    color: 'white',
    fontSize: 14,
    marginRight: 8,
  },
  footerLargeText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  checkImage: {
    marginBottom: 5,
  },
});

export default Footer;
