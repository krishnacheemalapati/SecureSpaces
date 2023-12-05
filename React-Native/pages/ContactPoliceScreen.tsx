import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import {images} from '../constants/images';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GenericButton from '../components/GenericButton';

function ContactPoliceScreen({navigation}: any): JSX.Element {
  const [notified, setNotified] = useState(false);

  const screenData = {
    confirmation: {
      instruction: 'Campus Police have been notified',
      description:
        'They will meet you at your space to file a missing items report.',
      subDescription: 'Please return to your desk now.',
    },
    asking: {
      instruction: 'Movement has been detected at your locked space',
      description: 'We recommend you return to your space ASAP.',
      subDescription: '',
    },
  };
  return (
    <View style={styles.container}>
      <Header warning={true} />

      <View style={styles.innerContainer}>
        <View style={styles.instructionContainer}>
          <Image style={styles.checkImage} source={images.redWarning} />
          <Text style={styles.largeTextBold}>
            {screenData[notified ? 'confirmation' : 'asking'].instruction}
          </Text>
          <Text style={styles.description}>
            {screenData[notified ? 'confirmation' : 'asking'].description}
          </Text>
          <Text style={[styles.subDescription, styles.description]}>
            {screenData[notified ? 'confirmation' : 'asking'].subDescription}
          </Text>
          {notified && (
            <GenericButton
              text={'Okay'}
              width={260}
              type={'secondary'}
              onPressIn={() => navigation.navigate('Lock')}
              warning={true}
              style={{top: 30}}
            />
          )}
        </View>

        <View style={styles.buttonContainer}>
          {!notified && (
            <View style={styles.buttons}>
              <GenericButton
                text={'No'}
                width={139}
                type={'secondary'}
                onPressIn={() => navigation.navigate('Lock')}
                warning={true}
              />
              <GenericButton
                text={'Yes'}
                width={130}
                type={'primary'}
                onPressIn={() => setNotified(true)}
                warning={true}
              />
            </View>
          )}
        </View>
      </View>
      <Footer locked={true} warning={true} />
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
    top: '10%',
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
    color: '#F93A3A',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
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
    flex: 5,
  },
  buttons: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subDescription: {
    fontWeight: '900',
  },
});

export default ContactPoliceScreen;
