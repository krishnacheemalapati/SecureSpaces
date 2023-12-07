import React from 'react';
import {Text, View, StyleSheet, Pressable, Image} from 'react-native';
import Header from '../components/Header';

import {images} from '../constants/images';
import {Switch} from 'react-native';
import {useSettings} from '../contexts/useSettings';

function SettingsScreen({navigation}: any): JSX.Element {
  const {isProximityNotif, isAlarmMute, toggleMute, toggleProximity} =
    useSettings();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <View style={[styles.topContainer]}>
          <Pressable
            style={[styles.backArrow]}
            onPressIn={() => navigation.goBack()}>
            <Image source={images.back_arrow} />
          </Pressable>
          <Text numberOfLines={1} style={[styles.largeText, {fontSize: 30}]}>
            Settings
          </Text>
        </View>
        <Text style={styles.description}>
          Control how you are notified about your Secure Space.
        </Text>
        <View style={styles.settingContainer}>
          <View style={styles.horizontalRule} />
          <View style={styles.individualSettingContainer}>
            <View style={{width: '80%', marginRight: 50}}>
              <Text style={styles.settingTitle}>Proximity Notifications</Text>
              <Text style={styles.settingsDescription}>
                If turned on, you will be notified when hovering is detected
                near your locked desk.
              </Text>
            </View>
            <Switch
              trackColor={{false: '#D9D9D9', true: '#FFBC1E'}}
              thumbColor={'#FAF8F8'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleProximity}
              value={isProximityNotif}
            />
          </View>
          <View style={styles.horizontalRule} />
          <View>
            <View style={styles.individualSettingContainer}>
              <View style={{width: '80%', marginRight: 50}}>
                <Text style={styles.settingTitle}>Mute Alarm</Text>
                <Text style={styles.settingsDescription}>
                  If turned on, no alarm will sound on the Secure Space when
                  theft is suspected. You will still be notified.
                </Text>
              </View>
              <Switch
                trackColor={{false: '#D9D9D9', true: '#FFBC1E'}}
                thumbColor={'#FAF8F8'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleMute}
                value={isAlarmMute}
              />
            </View>
          </View>
          <View style={styles.horizontalRule} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    alignItems: 'center',
    backgroundColor: '#F7F3DF',
  },
  qrCode: {
    marginTop: '10%',
    marginLeft: '12%',
  },
  input: {
    height: 45,
    margin: 12,
    paddingVertical: 10,
    paddingHorizontal: 35,
    width: 320,
    backgroundColor: '#FFF',
    borderStyle: 'solid',
    borderRadius: 25,
  },
  innerContainer: {
    height: '60%',
    width: '80%',
    flexDirection: 'column',
    marginTop: '5%',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  description: {
    fontFamily: 'LondrinaSolid-Light',
    fontSize: 18,
    fontWeight: '500',
    color: '#00314B',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    marginTop: '15%',
    // padding: 16,
  },
  largeText: {
    fontFamily: 'LondrinaSolid-Black',
    fontSize: 42,
    color: '#00314B',
    textAlign: 'center',
    fontWeight: '900',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20%',
    width: '100%',
    marginTop: '3%',
  },
  backArrow: {
    position: 'absolute',
    left: 20,
  },
  settingTitle: {
    fontFamily: 'LondrinaSolid-Light',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00314B',
    marginBottom: 5,
  },
  settingsDescription: {
    fontFamily: 'LondrinaSolid-Light',
    fontSize: 12,
    color: '#000',
    marginBottom: 5,
  },
  settingContainer: {
    marginTop: '15%',
  },
  individualSettingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
    justifyContent: 'space-around',
  },
  horizontalRule: {
    width: '110%',
    right: '5%',
    borderBottomColor: '#E4D27B',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default SettingsScreen;
