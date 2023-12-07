import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {BarCodeReadEvent} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useIsFocused} from '@react-navigation/core';
import GenericButton from '../components/GenericButton';
import Header from '../components/Header';

import {images} from '../constants/images';

function OpenCamera({navigation}: any): JSX.Element {
  const isFocused = useIsFocused();
  const [isManual, setisManual] = useState<Boolean>(false);
  const [error, setError] = useState<Boolean>(false);
  const [ID, setID] = useState<String>('');
  const parseAndProcess = (event: BarCodeReadEvent) => {
    const qrString: string = event.data;
    console.log(qrString);
    navigation.push('Lock');
  };
  const correctID = 'PRF3C-TDSGN';

  return (
    <KeyboardAvoidingView
      behavior={'height'}
      keyboardVerticalOffset={0}
      enabled={false}
      style={styles.container}>
      <Header />
      {isFocused && !isManual ? (
        <QRCodeScanner
          onRead={e => {
            parseAndProcess(e);
          }}
          showMarker={true}
          flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={
            <View style={styles.topContainer}>
              <Pressable
                style={styles.backArrow}
                onPressIn={() => navigation.goBack()}>
                <Image source={images.back_arrow} />
              </Pressable>
              <Text style={styles.largeText}>ScanQRCode</Text>
              <View />
            </View>
          }
          bottomContent={
            <GenericButton
              container={styles.buttonTouchable}
              text="Or Enter ID Manually"
              type={'primary'}
              width={280}
              onPress={() => setisManual(true)}
            />
          }
        />
      ) : (
        <View style={styles.innerContainer}>
          <View style={[styles.topContainer, {marginTop: '3%'}]}>
            <Pressable
              style={[styles.backArrow, {left: 1}]}
              onPressIn={() => setisManual(false)}>
              <Image source={images.back_arrow} />
            </Pressable>
            <Text numberOfLines={1} style={[styles.largeText, {fontSize: 30}]}>
              Enter Secure Station ID
            </Text>
          </View>
          <View style={styles.middleContainer}>
            <Text style={styles.description}>
              Enter the 10-digit code located below the QR code at your Secure
              Space.
            </Text>
            <Image source={images.small_qr} style={styles.qrCode} />
            {error && (
              <Text style={styles.errorText}>
                Error: Please type in a Secure Station ID
              </Text>
            )}
            <TextInput
              style={styles.input}
              onChangeText={newText => setID(newText)}
              placeholder="Enter Secure Station ID"
              keyboardType="default"
              maxLength={11}
              numberOfLines={1}
            />
            <GenericButton
              container={styles.buttonTouchable}
              text="Submit"
              type={'primary'}
              width={280}
              onPress={() => {
                if (ID !== correctID) {
                  setError(true);
                } else {
                  navigation.navigate('Lock');
                  setError(false);
                  setisManual(false);
                }
              }}
            />
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
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
    marginTop: '5%',
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
    color: '#00314B',
  },
  middleContainer: {
    height: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  innerContainer: {
    height: '80%',
    // width: '80%',
    flexDirection: 'column',
    // flexWrap: 'nowrap',
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
  errorText: {
    fontFamily: 'LondrinaSolid-Light',
    fontSize: 18,
    fontWeight: '500',
    color: '#FF0101',
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
    // flexWrap: 'nowrap',
    // flex: 1,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20%',
    width: '100%',
  },
  backArrow: {
    position: 'absolute',
    left: 20,
  },
});

export default OpenCamera;
