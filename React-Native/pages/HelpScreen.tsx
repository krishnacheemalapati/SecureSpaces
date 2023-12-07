import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import GenericButton from '../components/GenericButton';
import SplashScreen from 'react-native-splash-screen';
import {images} from '../constants/images';
import {useNavigation} from '@react-navigation/native';

function HelpScreen(): JSX.Element {
  const navigation = useNavigation();
  const [curStep, setCurStep] = useState(0);
  const stepData = [
    {
      image: require('../assets/images/lock.png'),
      largeText: 'Study with peace of mind.',
      description:
        'A secure way to take temporary breaks from your workspace in student commons.',
      buttons: ['Skip', 'Next'],
    },
    {
      image: require('../assets/images/laptop.png'),
      largeText: 'Lock your space before you leave.',
      description:
        'Scan the QR code on your desk to lock the space. Leave your space with peace of mind.',
      buttons: ['Skip', 'Next'],
    },
    {
      image: require('../assets/images/shield.png'),
      largeText: 'Get notified about detected motion.',
      description:
        'Receive push notifications about nearby hovering and movement on your space. Notify Campus Police if theft is suspected.',
      buttons: ['Get Started'],
    },
  ];

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.closeContainer}
        onPress={() => navigation.goBack()}>
        <Text style={styles.closeText}>Close</Text>
        <Image source={images.close} />
      </Pressable>
      <View style={styles.innerContainer}>
        <View style={styles.instructionContainer}>
          <Image style={styles.largeImage} source={stepData[curStep].image} />
          <Text style={styles.largeText}>{stepData[curStep].largeText}</Text>
          <Text style={styles.description}>
            {stepData[curStep].description}
          </Text>
          <View style={styles.dotNav}>
            <Text style={curStep === 0 ? styles.dotColored : styles.dot}>
              {' '}
            </Text>
            <Text style={curStep === 1 ? styles.dotColored : styles.dot}>
              {' '}
            </Text>
            <Text style={curStep === 2 ? styles.dotColored : styles.dot}>
              {' '}
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {curStep === 0 && (
            <View style={styles.buttonNav}>
              <GenericButton
                text="Next"
                type="primary"
                width={120}
                onPressIn={() => setCurStep(curStep + 1)}
              />
            </View>
          )}
          {curStep === 1 && (
            <View style={styles.buttonNav}>
              <GenericButton
                text="Back"
                type="secondary"
                width={120}
                onPressIn={() => setCurStep(curStep - 1)}
              />
              <GenericButton
                text="Next"
                type="primary"
                width={120}
                onPressIn={() => setCurStep(curStep + 1)}
              />
            </View>
          )}
          {curStep === 2 && (
            <View style={styles.buttonNav}>
              <GenericButton
                text="Back"
                type="secondary"
                width={120}
                onPressIn={() => setCurStep(curStep - 1)}
              />
              <GenericButton
                text="Close"
                type="primary"
                width={120}
                onPressIn={() => navigation.goBack()}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F3DF',
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
    justifyContent: 'space-around',
    flex: 1,
  },
  largeImage: {
    marginBottom: '15%',
  },
  largeText: {
    fontFamily: 'LondrinaSolid-Black',
    fontSize: 44,
    color: '#00314B',
    textAlign: 'center',
    marginBottom: '5%',
    width: '95%',
  },
  description: {
    fontFamily: 'LondrinaSolid-Light',
    fontSize: 18,
    fontWeight: '500',
    color: '#00314B',
    textAlign: 'center',
  },
  dotNav: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '30%',
    marginBottom: '5%',
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
  closeContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    right: 30,
    alignItems: 'center',
  },
  closeText: {
    fontFamily: 'LondrinaSolid-Light',
    fontSize: 20,
    fontWeight: '500',
    color: '#00314B',
    textAlign: 'center',
    marginRight: 5,
    bottom: 2,
  },
});

export default HelpScreen;
