import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {images} from '../constants/images';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GenericButton from '../components/GenericButton';

function MovementDetectionScreen({navigation}: any): JSX.Element {
  const [warningType, setWarningType] = useState('alert');
  const warningData = {
    alert: {
      icon: images.warning,
      instruction: 'Nearby hovering has been detected over your locked space',
      description: 'We recommend you return to your space ASAP.',
      buttons: ['Dismiss'],
    },
    danger: {
      icon: images.redWarning,
      instruction: 'Movement has been detected at your locked space',
      description: 'We recommend you return to your space ASAP.',
      buttons: ['Mute phone alarm', 'Notify Campus Police'],
    },
  };
  return (
    <View style={styles.container}>
      <Header color={'#F93A3A'} warning={true} />

      <View style={styles.innerContainer}>
        <View style={styles.instructionContainer}>
          <Image
            style={styles.warningImage}
            source={warningData[warningType].icon}
          />
          <Text style={styles.largeTextBold}>
            {warningData[warningType].instruction}
          </Text>
          <Text style={styles.description}>
            {warningData[warningType].description}
          </Text>
          {warningData[warningType].buttons?.map(item => {
            return (
              <View style={styles.optionButton}>
                <GenericButton
                  text={item}
                  width={260}
                  onPressIn={() => setWarningType('danger')}
                />
              </View>
            );
          })}
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
    alignItems: 'center',
  },
  instructionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    flex: 1,
  },
  warningImage: {
    marginBottom: 20,
  },
  largeTextBold: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#865E00',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#00314B',
    textAlign: 'center',
    marginBottom: 60,
  },
  optionButton: {
    margin: 8,
  },
});

export default MovementDetectionScreen;
