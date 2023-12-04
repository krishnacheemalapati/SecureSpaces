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
        <View>
          {warning ? (
            <View style={styles.timeText}>
              <Text style={styles.warningTextBold}>Robarts Commons,</Text>
              <Text style={styles.warningText}>Floor 5, Desk 37</Text>
            </View>
          ) : (
            <View style={styles.timeText}>
              <View style={styles.footerText}>
                <Text style={styles.footerDescription}>LOCKED FOR</Text>
                <Image style={styles.checkImage} source={images.helpYellow} />
              </View>

              <Text style={styles.footerLargeText}>29:59</Text>
            </View>
          )}
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
    textAlign: 'center',
  },
  checkImage: {
    marginBottom: 5,
  },
  warningText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Londrina Solid',
  },
  warningTextBold: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Footer;
