import React from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import GenericButton from '../components/GenericButton';
import {images} from '../constants/images';
import Header from '../components/Header';

function HomeScreen({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <View style={styles.instructionContainer}>
          <Text style={styles.largeText}>
            Scan the QR code on your desk to get started
          </Text>
          <Text style={styles.description}>
            It should look something like this
          </Text>
          <Image style={styles.largeImage} source={images.qrCodeExample} />
        </View>

        <View style={styles.buttonContainer}>
          <GenericButton
            text="Open camera"
            width={280}
            type={'primary'}
            onPress={() => navigation.push('OpenCamera')}
          />
          <Pressable onPress={() => navigation.push('FindSpace')}>
            <Text style={styles.linkText}>Don't see a QR code?</Text>
          </Pressable>
        </View>
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
    marginTop: '10%',
  },
  instructionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  largeImage: {
    marginBottom: '20%',
  },
  largeText: {
    fontFamily: 'LondrinaSolid-Black',
    fontSize: 32,
    color: '#00314B',
    textAlign: 'center',
    marginBottom: '20%',
    fontWeight: 'bold',
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
  },
});

export default HomeScreen;
