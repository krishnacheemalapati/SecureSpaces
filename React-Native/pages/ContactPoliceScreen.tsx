import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import {images} from '../constants/images';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactPoliceScreen({navigation}: any): JSX.Element {
  const [locked, setLocked] = useState(true);
  return (
    <View style={styles.container}>
      <Header warning={true} />

      <View style={styles.innerContainer}>
        <View style={styles.instructionContainer}>
          <Image style={styles.checkImage} source={images.redWarning} />
          <Text style={styles.largeTextBold}>
            Campus police has been notified
          </Text>
          <Text style={styles.description}>
            They will meet you at your space to file a missing items report.
          </Text>
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
      <Footer locked={locked} warning={true} />
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
});

export default ContactPoliceScreen;
