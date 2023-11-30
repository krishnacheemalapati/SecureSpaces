import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import GenericButton from '../components/GenericButton.tsx';

function OnboardingScreen({navigation}: any): JSX.Element {
  const [curStep, setCurStep] = useState(0);
  const stepData = [
    {
        image: require('../assets/images/lock.png'),
        largeText: 'Study with peace of mind.',
        description: 'A secure way to take temporary breaks from your workspace in libraries and student commons.',
        buttons: ['Skip', 'Next']
    },
    {
        image: require('../assets/images/laptop.png'),
        largeText: 'Lock your space before you leave.',
        description: 'Scan the QR code on your desk to lock the space. Leave your space with peace of mind.',
        buttons: ['Skip', 'Next']
    },
    {
        image: require('../assets/images/shield.png'),
        largeText: 'Get notified about detected motion.',
        description: 'Receive push notifications about nearby hovering and movement on your space. Notify Campus Police if theft is suspected.',
        buttons: ['Get Started']
    }
  ]
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={styles.instructionContainer}>
                <Image style={styles.largeImage} source={stepData[curStep].image}/>
                <Text style={styles.largeText}>{stepData[curStep].largeText}</Text>
                <Text style={styles.description}>{stepData[curStep].description}</Text>
                <View style={styles.dotNav}>
                    <Text style={0 == curStep ? styles.dotColored : styles.dot}> </Text>
                    <Text style={1 == curStep ? styles.dotColored : styles.dot}> </Text>
                    <Text style={2 == curStep ? styles.dotColored : styles.dot}> </Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
            {curStep < 2 ?
                <View style={styles.buttonNav}>
                    <GenericButton text="Skip"  type="secondary" width={120} onPress={() => setCurStep(2)}/>
                    <GenericButton text="Next"  type="primary" width={120} onPress={() => setCurStep(curStep + 1)}/>
                </View>
            :
                <GenericButton text="Get Started"  type="primary" width={160}/>
            }
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
    height: '80%'
  },
  instructionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  largeImage: {
    marginBottom: '20%'
  },
  largeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00314B',
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: '#00314B',
    textAlign: 'center'
  },
  dotNav: {
  display: 'flex',
  flexDirection: 'row',
  marginTop: '10%',
  width: '30%',
  justifyContent: 'space-between'
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
      backgroundColor: '#00314B'
    },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  buttonNav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
});

export default OnboardingScreen;
