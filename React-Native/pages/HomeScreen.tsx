import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import GenericButton from '../components/GenericButton';
import {images} from '../constants/images';

function HomeScreen({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.largeImage} source={images.help} width={30} />
        <Image style={styles.largeImage} source={images.settings} />
      </View>
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
            onPress={() => navigation.push('OpenCamera')}
          />
          <Text style={styles.linkText}>Didn't see a QR code?</Text>
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
  header: {
    backgroundColor: '#ECE2B2',
    height: 60,
    alignSelf: 'flex-start',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
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
    flex: 1,
  },
  largeImage: {
    marginBottom: '20%',
  },
  largeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00314B',
    textAlign: 'center',
    marginBottom: '20%',
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
