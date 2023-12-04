import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import {images} from '../constants/images';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GenericButton from '../components/GenericButton';

function MovementDetectionScreen({navigation}: any): JSX.Element {
  const [warningType, setWarningType] = useState('alert');
  const [alarmOn, setAlarmOn] = useState(true);

  const warningData = {
    alert: {
      icon: images.warning,
      instruction: 'Nearby hovering has been detected over your locked space',
      description: 'We recommend you return to your space ASAP.',
      buttons: [
        {
          id: 1,
          name: 'Dismiss',
          onPress: () => {
            navigation.navigate('Lock');
          },
          type: 'secondary',
        },
      ],
    },
    danger: {
      icon: images.redWarning,
      instruction: 'Movement has been detected at your locked space',
      description: 'We recommend you return to your space ASAP.',
      buttons: [
        {
          id: 1,
          name: alarmOn ? 'Mute phone alarm' : 'Alarm Muted',
          onPress: () => {
            setAlarmOn(false);
          },
          type: 'secondary',
        },
        {
          id: 2,
          name: 'Notify Campus Police',
          onPress: () => {
            navigation.navigate('ContactPolice');
          },
          type: 'primary',
        },
      ],
    },
  };
  return (
    <View style={styles.container}>
      <Header warning={warningType === 'danger'} />

      <View style={styles.innerContainer}>
        <View style={styles.instructionContainer}>
          <Pressable onPress={() => setWarningType('danger')}>
            <Image
              style={styles.warningImage}
              source={warningData[warningType].icon}
            />
          </Pressable>
          <Text style={styles.largeTextBold}>
            {warningData[warningType].instruction}
          </Text>
          <Text style={styles.description}>
            {warningData[warningType].description}
          </Text>
          {warningData[warningType].buttons?.map(item => {
            return (
              <View style={styles.optionButton} key={item.name}>
                <GenericButton
                  disabled={
                    !alarmOn && item.id === 1 && warningType === 'danger'
                  }
                  text={item.name}
                  width={260}
                  type={item.type}
                  onPressIn={item.onPress}
                  warning={true}
                />
              </View>
            );
          })}
        </View>
      </View>
      <Footer locked={true} warning={warningType === 'danger'} />
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
