import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ThemedButton} from 'react-native-really-awesome-button';

function GenericButton({
  text,
  type,
  onPress,
  onPressIn,
  width,
  activeOpacity,
  container,
  disabled,
  warning,
  style,
}: any): JSX.Element {
  return (
    <View style={container}>
      <ThemedButton
        name="rick"
        type={type}
        style={style}
        onPress={onPress}
        onPressIn={onPressIn}
        width={width}
        activeOpacity={activeOpacity}
        disabled={disabled}
        backgroundColor={
          type === 'primary'
            ? !warning
              ? '#00314B'
              : '#F93A3A'
            : type === 'secondary'
            ? !warning
              ? '#F7F3DF'
              : '#DFD8CC'
            : '#DFD8CC'
        }
        textColor={
          type === 'primary'
            ? '#fff'
            : type === 'secondary'
            ? '#00314B'
            : '#000000'
        }
        raiseLevel={0}
        textSize={18}
        borderWidth={0}>
        {text}
      </ThemedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default GenericButton;
