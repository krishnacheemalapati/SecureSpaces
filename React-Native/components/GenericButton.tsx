import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ThemedButton} from 'react-native-really-awesome-button';

function GenericButton({
  text,
  type,
  onPress,
  width,
  activeOpacity,
}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <ThemedButton
        name="rick"
        type={type}
        // style={styles.button}
        onPress={onPress}
        width={width}
        activeOpacity={activeOpacity}>
        {text}
      </ThemedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default GenericButton;
