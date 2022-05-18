import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    height: 690,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    width: '100%',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: {width: 2, height: 2},
    color: '#FF008A',
    fontFamily: 'chakraPetchBold',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonShadow: {
    shadowOffset: {width: -7, height: -7},
    shadowOpacity: 1,
    marginTop: 16,
    shadowRadius: 14,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#353A45',
    width: 200,
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
