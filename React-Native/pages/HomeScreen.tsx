import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import GenericButton from '../components/GenericButton';
// import {images} from '../constants/images';

function HomeScreen({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.instructionContainer}>
          <Text style={styles.largeText}>
            Scan the QR code on your desk to get started
          </Text>
          <Text style={styles.description}>
            It should look something like this
          </Text>
          {/* <Image style={styles.largeImage} source={images.qrCodeExample} /> */}
        </View>

        <View style={styles.buttonContainer}>
          <GenericButton
            text="Open camera"
            width={160}
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
    justifyContent: 'center',
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
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: '#00314B',
    textAlign: 'center',
  },
  linkText: {
    fontWeight: '500',
    color: '#00314B',
    fontSize: 16,
    textDecoration: 'underline',
  },
  dotNav: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10%',
    width: '30%',
    justifyContent: 'space-between',
  },
  dot: {
    borderWidth: 2,
    width: 20,
    height: 20,
    borderColor: '#00314B',
    borderRadius: 50,
  },
  dotColored: {
    borderWidth: 2,
    width: 20,
    height: 20,
    borderColor: '#00314B',
    borderRadius: 50,
    backgroundColor: '#00314B',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  buttonNav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
});

export default HomeScreen;
