import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_USER} from '../gqls/users/queries';
import {StyleSheet} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

const styles = StyleSheet.create({
  main: {
    height: 690,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main2: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
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

export const UsersList = () => {
  const {loading, error, data} = useQuery(GET_USER);

  return (
    <ScrollView style={styles.scroll}>
      {data.findManyUser.map(item => {
        return (
          <View key={item.id} style={{alignSelf: 'center'}}>
            <Neomorph
              lightShadowColor="#1E2126"
              darkShadowColor="#576178"
              style={styles.buttonShadow}>
              <Text style={styles.buttonText}>{item.name}</Text>
            </Neomorph>
          </View>
        );
      })}
    </ScrollView>
  );
};
