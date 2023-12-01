import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {BarCodeReadEvent} from 'react-native-camera';
// import GenericButton from '../components/GenericButton';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

function OpenCamera({navigation}: any): JSX.Element {
  const parseAndProcess = (event: BarCodeReadEvent) => {
    const qrString: string = event.data;
    const wcRegex = new RegExp('^wc:.+$');
    Linking.canOpenURL(qrString).then(supported => {
      if (supported) {
        Linking.openURL(qrString);
      } else {
        console.log("Don't know how to open URI: " + qrString);
      }
    });
    if (wcRegex.test(qrString)) {
      // walletConnectContext2.setUri(qrString);
      // refBottomSheetModal.current?.close();
    }
  };
  return (
    <View style={styles.container}>
      {/* <Text>Home Screen</Text>
      <GenericButton
        text="OpenCamera"
        onPress={() => navigation.push('OpenCamera')}
      /> */}
      <QRCodeScanner
        onRead={e => {
          parseAndProcess(e);
        }}
        // cameraStyle={{
        //   height: win.height,
        //   width: win.width,
        //   borderRadius: 100,
        // }}
        // cameraContainerStyle={{
        //   justifyContent: 'center',
        //   alignItems: 'center',
        // }}
        showMarker={true}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
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
    padding: 16,
  },
  // cameraStyle: {
  //   height: win.height,
  //   width: win.width,
  //   borderRadius: 100,
  // },
});

export default OpenCamera;
