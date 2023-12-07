import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
// import GenericButton from '../components/GenericButton';
import {images} from '../constants/images';
import Header from '../components/Header';
import Accordion from 'react-native-collapsible/Accordion';
import GenericButton from '../components/GenericButton';
const SECTIONS = [
  {
    title: 'Robarts Commons',
    content: [
      'Floor 2, Desk 3',
      'Floor 2, Desk 5',
      'Floor 2, Desk 9',
      'Floor 2, Desk 13',
      'Floor 2, Desk 15',
    ],
    id: 0,
  },
  {
    title: 'Myhal Commons',
    content: [],
    id: 1,
  },
  {
    title: 'Bahen Commons',
    content: [],
    id: 2,
  },
  {
    title: 'Gerstein Commons',
    content: [],
    id: 3,
  },
  {
    title: 'UC Commmons',
    content: [],
    id: 4,
  },
];
function FindSpaceScreen({navigation}: any): JSX.Element {
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const [isAvailable, setIsAvailable] = useState<Boolean>(true);

  const renderHeader = (section: any): JSX.Element => {
    return (
      <View>
        {section.title === 'Robarts Commons' ? (
          <View
            style={
              activeSections.some(item => item === section.id)
                ? styles.headerOpen
                : styles.header
            }>
            <Text numberOfLines={1} style={styles.headerText}>
              {section.title}
            </Text>
            <Image source={images.down_arrow} style={styles.downArrow} />
          </View>
        ) : (
          <Pressable onPress={() => setIsAvailable(false)}>
            <View style={styles.header}>
              <Text numberOfLines={1} style={styles.headerText}>
                {section.title}
              </Text>
              <Image source={images.down_arrow} style={styles.downArrow} />
            </View>
          </Pressable>
        )}
      </View>
    );
  };

  const renderContent = (section: any): JSX.Element => {
    return (
      <View style={styles.content}>
        {section.content?.map((text: any) => {
          return <Text style={styles.contentText}>{text}</Text>;
        })}
      </View>
    );
  };

  const updateSections = (activeSections: number[]): void => {
    setActiveSections(activeSections);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <View style={styles.instructionContainer}>
          <View style={styles.topContainer}>
            {isAvailable && (
              <Pressable
                style={styles.backArrow}
                onPressIn={() => navigation.goBack()}>
                <Image source={images.back_arrow} />
              </Pressable>
            )}
            <Text style={styles.largeText}>
              {isAvailable ? "Don't See a QR Code?" : 'Oops!'}
            </Text>
          </View>
          {isAvailable ? (
            <View>
              <Text style={styles.description}>
                You may not be at a Secure Space desk. The following Secure
                Spaces are available:
              </Text>
              <Accordion
                sectionContainerStyle={styles.accordianContainer}
                sections={SECTIONS}
                activeSections={activeSections}
                renderHeader={renderHeader}
                renderContent={renderContent}
                onChange={updateSections}
              />
            </View>
          ) : (
            <View style={styles.instructionContainer}>
              <Text
                style={[
                  styles.largeText,
                  {fontWeight: '500', marginBottom: '10%'},
                ]}>
                You’ve clicked on a location that does not currently have any
                Secure Spaces!{' '}
              </Text>
              <Text style={[styles.largeText, {fontWeight: '500'}]}>
                Not to worry! We hope to install new Secure Space here in the
                near future! Check back in 2027!
              </Text>
              <GenericButton
                container={styles.buttonTouchable}
                text="Go Back"
                type={'primary'}
                width={280}
                onPress={() => setIsAvailable(true)}
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
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F7F3DF',
    display: 'flex',
    height: '100%',
  },
  innerContainer: {
    width: '80%',
    height: '80%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  instructionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-around',
    marginTop: '5%',
    flex: 1,
  },
  largeImage: {
    marginBottom: '20%',
  },
  largeText: {
    fontFamily: 'LondrinaSolid-Black',
    fontSize: 32,
    color: '#00314B',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
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
    alignItems: 'center',
  },
  backArrow: {
    position: 'absolute',
    left: -25,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingVertical: 15,
    borderRadius: 20,
  },
  headerOpen: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingVertical: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  headerText: {
    fontFamily: 'LondrinaSolid-Black',
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 85,
    fontWeight: 'bold',
    color: '#00314B',
  },
  content: {
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contentText: {
    color: '#00314B',
    fontSize: 15,
    borderTopWidth: 1,
    borderTopColor: '#D5C990',
    paddingVertical: 10,
    paddingLeft: 18,
  },
  accordianContainer: {
    marginTop: 20,
  },
  downArrow: {
    right: 20,
    position: 'absolute',
  },
  buttonTouchable: {
    marginTop: '15%',
  },
});

export default FindSpaceScreen;
