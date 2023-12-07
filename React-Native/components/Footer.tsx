import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import CountDown from 'react-native-countdown-component';
import {images} from '../constants/images';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Footer({locked, setLocked, warning}: any): JSX.Element {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: 'absolute',
        bottom: locked ? 0 : -40,
        width: '100%',
      }}>
      <Image
        style={styles.footerImage}
        source={warning ? images.footerWarning : images.footer}
      />
      {locked ? (
        <View>
          {warning ? (
            <View style={styles.timeText}>
              <Text style={styles.warningTextBold}>Robarts Commons,</Text>
              <Text style={styles.warningText}>Floor 5, Desk 37</Text>
            </View>
          ) : (
            <View style={styles.timeText}>
              <View style={styles.footerText}>
                <Text style={styles.footerDescription}>LOCKED FOR</Text>
                <Image style={styles.checkImage} source={images.helpYellow} />
              </View>

              <CountDown
                until={30}
                onFinish={() => setLocked((prevLocked: any) => !prevLocked)}
                size={20}
                digitTxtStyle={{color: '#00314B'}}
                timeToShow={['M', 'S']}
                timeLabels={{m: undefined, s: undefined}}
              />
            </View>
          )}
        </View>
      ) : (
        <View>
          <Pressable
            style={styles.disconnectContainer}
            onPress={() => navigation.navigate('Home' as never)}>
            <Text style={styles.disconnectText}>Disconnect from desk</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  footerImage: {
    width: '100%',
  },
  timeText: {
    position: 'absolute',
    bottom: 30,
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
  },
  footerText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerDescription: {
    color: 'white',
    fontSize: 14,
    marginRight: 8,
  },
  footerLargeText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkImage: {
    marginBottom: 5,
  },
  warningText: {
    color: 'white',
    fontFamily: 'LondrinaSolid-Light',
    fontSize: 24,
    textAlign: 'center',
  },
  warningTextBold: {
    color: 'white',
    fontFamily: 'LondrinaSolid-Black',
    fontSize: 24,
    textAlign: 'center',
  },
  disconnectText: {
    color: '#ECE2B2',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disconnectContainer: {
    position: 'absolute',
    bottom: 60,
    padding: 5,
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default Footer;
