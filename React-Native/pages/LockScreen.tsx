import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import {images} from '../constants/images';
import Header from '../components/Header';

function LockScreen({}: any): JSX.Element {
  const [locked, setLocked] = useState(false);
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.innerContainer}>
        <View style={styles.instructionContainer}>
          <Image style={styles.checkImage} source={images.check} />
          <Text style={styles.description}>You are connected to</Text>
          <Text style={styles.largeTextBold}>Robarts Commons,</Text>
          <Text style={styles.largeText}>Floor 5, Desk 37</Text>
        </View>

        <Pressable
          style={styles.buttonContainer}
          onPress={() => setLocked(!locked)}>
          <Image
            style={styles.checkImage}
            source={!locked ? images.unlocked : images.timedLock}
          />
          <Text style={styles.lockText}>Tap and hold to lock</Text>
        </Pressable>
      </View>

      <View style={styles.footerContainer}>
        <Image style={styles.footerImage} source={images.footer} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F7F3DF',
    display: 'flex',
    height: '100%',
  },
  innerContainer: {
    width: '80%',
    height: '80%',
  },
  instructionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 6,
  },
  checkImage: {
    marginBottom: 5,
  },
  lockText: {
    color: '#865E00',
    fontWeight: 'bold',
    width: 90,
    textAlign: 'center',
  },
  largeText: {
    fontSize: 30,
    color: '#00314B',
    textAlign: 'center',
    marginBottom: '20%',
  },
  largeTextBold: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00314B',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#00314B',
    textAlign: 'center',
    marginBottom: 10,
  },
  linkText: {
    marginTop: 10,
    fontWeight: '500',
    color: '#00314B',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 5,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
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
});

export default LockScreen;
