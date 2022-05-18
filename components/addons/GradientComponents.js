import React from 'react';

import {Neomorph} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonShadow: {
    shadowOffset: {width: -7, height: -7},
    shadowOpacity: 1,
    margin: 5,
    shadowRadius: 14,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#353A45',
    width: 112,
    height: 63,
  },
  buttonText: {
    width: '100%',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: {width: 2, height: 2},
    color: '#FDD400',
    fontFamily: 'chakraPetchBold',
    fontSize: 18,
    textAlign: 'center',
  },
});

const GradientNeomorph = ({children, styleBox, styleShadow}) => {
  return (
    <LinearGradient
      colors={['#FF008A', '#9E00FF']}
      start={{x: 0.5, y: 0.0}}
      end={{x: 0.5, y: 1.0}}
      style={styleBox}>
      <Neomorph
        inner
        lightShadowColor="#1E2126"
        darkShadowColor="#576178"
        style={styleShadow}>
        {children}
      </Neomorph>
    </LinearGradient>
  );
};

const GradientButton = ({text}) => {
  return (
    <Neomorph
      lightShadowColor="#1E2126"
      darkShadowColor="#576178"
      style={styles.buttonShadow}>
      <Text style={styles.buttonText}>{text}</Text>
    </Neomorph>
  );
};

export {GradientButton, GradientNeomorph};
