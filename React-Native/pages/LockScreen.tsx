import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import {images} from '../constants/images';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LockScreen({navigation}: any): JSX.Element {
  const [locked, setLocked] = useState(false);
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.innerContainer}>
        <Pressable
          style={styles.instructionContainer}
          onPress={() => {
            if (locked) {
              navigation.navigate('MovementDetection');
            }
          }}>
          <Image style={styles.checkImage} source={images.check} />
          <Text style={styles.description}>You are connected to</Text>
          <Text style={styles.largeTextBold}>Robarts Commons,</Text>
          <Text style={styles.largeText}>Floor 5, Desk 37</Text>
        </Pressable>

        <Pressable
          style={styles.buttonContainer}
          onPress={() => setLocked(!locked)}>
          <Image
            style={styles.checkImage}
            source={!locked ? images.unlocked : images.timedLock}
          />
          <Text style={styles.lockText}>
            {locked ? 'Tap to unlock' : 'Tap to lock'}
          </Text>
        </Pressable>
      </View>
      <Footer locked={locked} setLocked={setLocked} />
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
    fontFamily: 'LondrinaSolid-Light',
    fontSize: 38,
    color: '#00314B',
    textAlign: 'center',
    marginBottom: '20%',
  },
  largeTextBold: {
    fontFamily: 'LondrinaSolid-Black',
    fontSize: 40,
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

export default LockScreen;
