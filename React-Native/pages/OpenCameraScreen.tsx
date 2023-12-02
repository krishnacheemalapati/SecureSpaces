import React from 'react';
import {Text, View, StyleSheet, Pressable, Image} from 'react-native';
import {BarCodeReadEvent} from 'react-native-camera';
// import GenericButton from '../components/GenericButton';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useIsFocused} from '@react-navigation/core';
import GenericButton from '../components/GenericButton';

import {images} from '../constants/images';

function OpenCamera({navigation}: any): JSX.Element {
  const isFocused = useIsFocused();
  const parseAndProcess = (event: BarCodeReadEvent) => {
    const qrString: string = event.data;
    console.log(qrString);
    navigation.push('Onboarding'); //TODO: Change destination
  };

  return (
    <View style={styles.container}>
      {isFocused ? (
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
              text="Or connect manually"
              onPress={() => navigation.push('Onboarding')} //TODO: Replace destination
            />
          }
        />
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    // marginTop: 20,
    // padding: 16,
  },
  largeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00314B',
    textAlign: 'center',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
    width: '100%',
  },
  backArrow: {
    position: 'absolute',
    left: 20,
  },
});

export default OpenCamera;
